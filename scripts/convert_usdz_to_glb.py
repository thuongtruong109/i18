from __future__ import annotations

import argparse
import json
import mimetypes
import struct
import zipfile
from pathlib import Path
from typing import Any

import numpy as np
from pxr import Usd, UsdGeom, UsdShade


ARRAY_BUFFER = 34962
FLOAT = 5126


class GlbBuilder:
    def __init__(self) -> None:
        self.binary = bytearray()
        self.buffer_views: list[dict[str, Any]] = []
        self.accessors: list[dict[str, Any]] = []
        self.images: list[dict[str, Any]] = []
        self.textures: list[dict[str, Any]] = []
        self.samplers: list[dict[str, Any]] = []
        self.materials: list[dict[str, Any]] = []
        self.meshes: list[dict[str, Any]] = []
        self.nodes: list[dict[str, Any]] = []
        self.extensions_used: set[str] = set()

    def add_blob(self, data: bytes, target: int | None = None) -> int:
        while len(self.binary) % 4:
            self.binary.append(0)
        view: dict[str, Any] = {
            "buffer": 0,
            "byteOffset": len(self.binary),
            "byteLength": len(data),
        }
        if target is not None:
            view["target"] = target
        self.binary.extend(data)
        self.buffer_views.append(view)
        return len(self.buffer_views) - 1

    def add_float_accessor(self, values: np.ndarray, kind: str, include_bounds: bool = False) -> int:
        values = np.ascontiguousarray(values, dtype="<f4")
        view = self.add_blob(values.tobytes(), ARRAY_BUFFER)
        accessor: dict[str, Any] = {
            "bufferView": view,
            "componentType": FLOAT,
            "count": int(values.shape[0]),
            "type": kind,
        }
        if include_bounds and len(values):
            accessor["min"] = values.min(axis=0).astype(float).tolist()
            accessor["max"] = values.max(axis=0).astype(float).tolist()
        self.accessors.append(accessor)
        return len(self.accessors) - 1

    def add_image(self, data: bytes, mime_type: str, name: str) -> int:
        view = self.add_blob(data)
        self.images.append({"bufferView": view, "mimeType": mime_type, "name": name})
        return len(self.images) - 1

    def save(self, output: Path) -> None:
        document: dict[str, Any] = {
            "asset": {"version": "2.0", "generator": "Apple USDZ to glTF converter"},
            "scene": 0,
            "scenes": [{"nodes": list(range(len(self.nodes)))}],
            "nodes": self.nodes,
            "meshes": self.meshes,
            "materials": self.materials,
            "textures": self.textures,
            "samplers": self.samplers,
            "images": self.images,
            "accessors": self.accessors,
            "bufferViews": self.buffer_views,
            "buffers": [{"byteLength": len(self.binary)}],
        }
        if self.extensions_used:
            document["extensionsUsed"] = sorted(self.extensions_used)

        json_bytes = json.dumps(document, separators=(",", ":"), ensure_ascii=False).encode("utf-8")
        json_bytes += b" " * ((4 - len(json_bytes) % 4) % 4)
        binary_bytes = bytes(self.binary)
        binary_bytes += b"\x00" * ((4 - len(binary_bytes) % 4) % 4)
        total_length = 12 + 8 + len(json_bytes) + 8 + len(binary_bytes)
        output.write_bytes(
            struct.pack("<4sII", b"glTF", 2, total_length)
            + struct.pack("<I4s", len(json_bytes), b"JSON")
            + json_bytes
            + struct.pack("<I4s", len(binary_bytes), b"BIN\x00")
            + binary_bytes
        )


def connected_shader(input_: UsdShade.Input) -> tuple[UsdShade.Shader | None, str]:
    result = input_.GetConnectedSources()
    sources = result[0] if isinstance(result, tuple) else result
    if not sources:
        return None, ""
    source = sources[0]
    return UsdShade.Shader(source.source.GetPrim()), str(source.sourceName)


def scalar(value: Any, fallback: float) -> float:
    if value is None:
        return fallback
    try:
        return float(value)
    except (TypeError, ValueError):
        return fallback


def color(value: Any, fallback: tuple[float, float, float]) -> list[float]:
    if value is None:
        return list(fallback)
    try:
        return [float(value[0]), float(value[1]), float(value[2])]
    except (TypeError, ValueError, IndexError):
        return list(fallback)


def internal_asset_path(asset: Any) -> str | None:
    if asset is None:
        return None
    resolved = str(getattr(asset, "resolvedPath", "") or "")
    if "[" in resolved and resolved.endswith("]"):
        return resolved.rsplit("[", 1)[1][:-1].replace("\\", "/")
    authored = str(getattr(asset, "path", "") or getattr(asset, "authoredPath", "") or "")
    return authored.replace("\\", "/") or None


def wrap_mode(value: Any) -> int:
    return {
        "clamp": 33071,
        "mirror": 33648,
        "repeat": 10497,
    }.get(str(value or "repeat"), 10497)


class MaterialExporter:
    def __init__(self, builder: GlbBuilder, archive: zipfile.ZipFile) -> None:
        self.builder = builder
        self.archive = archive
        self.material_cache: dict[str, int] = {}
        self.texture_cache: dict[tuple[str, int, int], int] = {}
        self.sampler_cache: dict[tuple[int, int], int] = {}

    def texture_for_input(self, input_: UsdShade.Input) -> tuple[int | None, str]:
        shader, channel = connected_shader(input_)
        if not shader or shader.GetIdAttr().Get() != "UsdUVTexture":
            return None, channel
        file_input = shader.GetInput("file")
        internal = internal_asset_path(file_input.Get() if file_input else None)
        if not internal:
            return None, channel
        try:
            data = self.archive.read(internal)
        except KeyError:
            suffix_matches = [name for name in self.archive.namelist() if name.endswith(internal)]
            if not suffix_matches:
                return None, channel
            internal = suffix_matches[0]
            data = self.archive.read(internal)

        wrap_s = wrap_mode(shader.GetInput("wrapS").Get() if shader.GetInput("wrapS") else None)
        wrap_t = wrap_mode(shader.GetInput("wrapT").Get() if shader.GetInput("wrapT") else None)
        cache_key = (internal, wrap_s, wrap_t)
        if cache_key in self.texture_cache:
            return self.texture_cache[cache_key], channel

        sampler_key = (wrap_s, wrap_t)
        if sampler_key not in self.sampler_cache:
            self.builder.samplers.append(
                {"magFilter": 9729, "minFilter": 9987, "wrapS": wrap_s, "wrapT": wrap_t}
            )
            self.sampler_cache[sampler_key] = len(self.builder.samplers) - 1

        mime_type = mimetypes.guess_type(internal)[0] or "application/octet-stream"
        image_index = self.builder.add_image(data, mime_type, Path(internal).name)
        self.builder.textures.append(
            {"sampler": self.sampler_cache[sampler_key], "source": image_index}
        )
        texture_index = len(self.builder.textures) - 1
        self.texture_cache[cache_key] = texture_index
        return texture_index, channel

    def export(self, material: UsdShade.Material | None) -> int:
        key = str(material.GetPath()) if material else "__fallback__"
        if key in self.material_cache:
            return self.material_cache[key]

        if not material:
            result = {
                "name": "Fallback",
                "pbrMetallicRoughness": {
                    "baseColorFactor": [0.5, 0.5, 0.5, 1.0],
                    "metallicFactor": 0.0,
                    "roughnessFactor": 0.6,
                },
            }
        else:
            shader = material.ComputeSurfaceSource()[0]
            if not shader:
                return self.export(None)
            diffuse_input = shader.GetInput("diffuseColor")
            metallic_input = shader.GetInput("metallic")
            roughness_input = shader.GetInput("roughness")
            opacity_input = shader.GetInput("opacity")
            normal_input = shader.GetInput("normal")
            occlusion_input = shader.GetInput("occlusion")
            emissive_input = shader.GetInput("emissiveColor")

            opacity = scalar(opacity_input.Get() if opacity_input else None, 1.0)
            diffuse_texture, _ = self.texture_for_input(diffuse_input) if diffuse_input else (None, "")
            base_rgb = color(diffuse_input.Get() if diffuse_input else None, (0.5, 0.5, 0.5))
            if diffuse_texture is not None:
                base_rgb = [1.0, 1.0, 1.0]
            pbr: dict[str, Any] = {
                "baseColorFactor": [*base_rgb, opacity],
                "metallicFactor": scalar(metallic_input.Get() if metallic_input else None, 0.0),
                "roughnessFactor": scalar(roughness_input.Get() if roughness_input else None, 0.45),
            }
            if diffuse_texture is not None:
                pbr["baseColorTexture"] = {"index": diffuse_texture}

            result = {
                "name": material.GetPrim().GetName(),
                "pbrMetallicRoughness": pbr,
                "doubleSided": True,
            }
            if opacity < 0.995:
                result["alphaMode"] = "BLEND"

            normal_texture, _ = self.texture_for_input(normal_input) if normal_input else (None, "")
            if normal_texture is not None:
                result["normalTexture"] = {"index": normal_texture}
            occlusion_texture, _ = self.texture_for_input(occlusion_input) if occlusion_input else (None, "")
            if occlusion_texture is not None:
                result["occlusionTexture"] = {"index": occlusion_texture}

            emissive_texture, _ = self.texture_for_input(emissive_input) if emissive_input else (None, "")
            emissive_color = color(emissive_input.Get() if emissive_input else None, (0.0, 0.0, 0.0))
            if emissive_texture is not None:
                result["emissiveTexture"] = {"index": emissive_texture}
                result["emissiveFactor"] = [1.0, 1.0, 1.0]
            elif max(emissive_color) > 0:
                result["emissiveFactor"] = emissive_color

            clearcoat = scalar(shader.GetInput("clearcoat").Get() if shader.GetInput("clearcoat") else None, 0.0)
            if clearcoat > 0:
                clearcoat_roughness = scalar(
                    shader.GetInput("clearcoatRoughness").Get()
                    if shader.GetInput("clearcoatRoughness")
                    else None,
                    0.0,
                )
                result.setdefault("extensions", {})["KHR_materials_clearcoat"] = {
                    "clearcoatFactor": clearcoat,
                    "clearcoatRoughnessFactor": clearcoat_roughness,
                }
                self.builder.extensions_used.add("KHR_materials_clearcoat")

        self.builder.materials.append(result)
        material_index = len(self.builder.materials) - 1
        self.material_cache[key] = material_index
        return material_index


def transformed_vectors(matrix: Any, values: Any, is_normal: bool = False) -> np.ndarray:
    result = np.empty((len(values), 3), dtype=np.float32)
    for index, value in enumerate(values):
        transformed = matrix.TransformDir(value) if is_normal else matrix.Transform(value)
        vector = np.asarray((transformed[0], transformed[1], transformed[2]), dtype=np.float32)
        if is_normal:
            length = float(np.linalg.norm(vector))
            if length > 1e-8:
                vector /= length
        result[index] = vector
    return result


def expanded_corner_indices(counts: list[int]) -> tuple[np.ndarray, np.ndarray]:
    corners: list[int] = []
    faces: list[int] = []
    cursor = 0
    for face_index, count in enumerate(counts):
        for offset in range(1, count - 1):
            corners.extend((cursor, cursor + offset, cursor + offset + 1))
            faces.extend((face_index, face_index, face_index))
        cursor += count
    return np.asarray(corners, dtype=np.int64), np.asarray(faces, dtype=np.int64)


def expanded_attribute(
    values: Any,
    interpolation: str,
    corner_indices: np.ndarray,
    point_indices: np.ndarray,
    face_indices: np.ndarray,
    authored_indices: Any = None,
) -> np.ndarray | None:
    if values is None or len(values) == 0:
        return None
    lookup: np.ndarray
    if interpolation in ("vertex", "varying"):
        lookup = point_indices
    elif interpolation == "faceVarying":
        lookup = corner_indices
    elif interpolation == "uniform":
        lookup = face_indices
    else:
        lookup = np.zeros(len(corner_indices), dtype=np.int64)
    if authored_indices is not None and len(authored_indices):
        lookup = np.asarray(authored_indices, dtype=np.int64)[lookup]
    return np.asarray(values, dtype=np.float32)[lookup]


def convert(source: Path, output: Path, variants: list[str]) -> None:
    stage = Usd.Stage.Open(str(source))
    if not stage:
        raise RuntimeError(f"Could not open {source}")

    default_prim = stage.GetDefaultPrim()
    for variant in variants:
        name, separator, selection = variant.partition("=")
        if not separator or not name or not selection:
            raise ValueError(f"Invalid variant '{variant}', expected NAME=SELECTION")
        variant_set = default_prim.GetVariantSets().GetVariantSet(name)
        if selection not in variant_set.GetVariantNames():
            raise ValueError(
                f"Unknown selection '{selection}' for {name}; available: {variant_set.GetVariantNames()}"
            )
        variant_set.SetVariantSelection(selection)

    builder = GlbBuilder()
    xforms = UsdGeom.XformCache(Usd.TimeCode.Default())
    exported_vertices = 0
    exported_meshes = 0
    with zipfile.ZipFile(source) as archive:
        materials = MaterialExporter(builder, archive)
        for prim in stage.Traverse():
            if not prim.IsA(UsdGeom.Mesh):
                continue
            if UsdGeom.Imageable(prim).ComputeVisibility() == UsdGeom.Tokens.invisible:
                continue
            mesh = UsdGeom.Mesh(prim)
            points = mesh.GetPointsAttr().Get() or []
            counts = list(mesh.GetFaceVertexCountsAttr().Get() or [])
            face_vertex_indices = np.asarray(mesh.GetFaceVertexIndicesAttr().Get() or [], dtype=np.int64)
            if not points or not counts or not len(face_vertex_indices):
                continue

            corner_indices, face_indices = expanded_corner_indices(counts)
            if mesh.GetOrientationAttr().Get() == UsdGeom.Tokens.leftHanded:
                corner_indices = corner_indices.reshape((-1, 3))[:, [0, 2, 1]].reshape(-1)
                face_indices = face_indices.reshape((-1, 3))[:, [0, 2, 1]].reshape(-1)
            point_indices = face_vertex_indices[corner_indices]
            matrix = xforms.GetLocalToWorldTransform(prim)
            world_points = transformed_vectors(matrix, points)
            positions = world_points[point_indices]

            attributes: dict[str, int] = {
                "POSITION": builder.add_float_accessor(positions, "VEC3", include_bounds=True)
            }
            normals = mesh.GetNormalsAttr().Get() or []
            if normals:
                world_normals = transformed_vectors(matrix, normals, is_normal=True)
                expanded_normals = expanded_attribute(
                    world_normals,
                    str(mesh.GetNormalsInterpolation()),
                    corner_indices,
                    point_indices,
                    face_indices,
                )
                if expanded_normals is not None:
                    attributes["NORMAL"] = builder.add_float_accessor(expanded_normals, "VEC3")

            st = UsdGeom.PrimvarsAPI(prim).GetPrimvar("st")
            if st and st.HasValue():
                uv_values = st.Get() or []
                uv_indices = st.GetIndices() or []
                uvs = expanded_attribute(
                    uv_values,
                    str(st.GetInterpolation()),
                    corner_indices,
                    point_indices,
                    face_indices,
                    uv_indices,
                )
                if uvs is not None:
                    uvs[:, 1] = 1.0 - uvs[:, 1]
                    attributes["TEXCOORD_0"] = builder.add_float_accessor(uvs, "VEC2")

            bound_material = UsdShade.MaterialBindingAPI(prim).ComputeBoundMaterial()[0]
            material_index = materials.export(bound_material if bound_material else None)
            builder.meshes.append(
                {
                    "name": prim.GetName(),
                    "primitives": [
                        {"attributes": attributes, "material": material_index, "mode": 4}
                    ],
                }
            )
            builder.nodes.append({"name": prim.GetName(), "mesh": len(builder.meshes) - 1})
            exported_meshes += 1
            exported_vertices += len(positions)

    output.parent.mkdir(parents=True, exist_ok=True)
    builder.save(output)
    print(
        f"Converted {source.name}: {exported_meshes} meshes, {exported_vertices} vertices, "
        f"{len(builder.materials)} materials, {len(builder.images)} textures -> "
        f"{output.name} ({output.stat().st_size / 1024 / 1024:.2f} MiB)"
    )


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert an Apple USDZ asset into a browser-ready GLB.")
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument(
        "--variant",
        action="append",
        default=[],
        help="Select a root USD variant, for example --variant Color=Glacier",
    )
    args = parser.parse_args()
    convert(args.source, args.output, args.variant)


if __name__ == "__main__":
    main()

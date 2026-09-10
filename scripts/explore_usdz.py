from __future__ import annotations

import sys
from collections import Counter
from pathlib import Path

from pxr import Usd, UsdGeom, UsdShade


def describe_variants(prim: Usd.Prim) -> str:
    variants = prim.GetVariantSets()
    return ", ".join(
        f"{name}={variants.GetVariantSet(name).GetVariantSelection()}"
        for name in variants.GetNames()
    )


def mesh_stats(stage: Usd.Stage, root: Usd.Prim) -> tuple[int, int, tuple[list[float], list[float]]]:
    xforms = UsdGeom.XformCache(Usd.TimeCode.Default())
    low = [float("inf")] * 3
    high = [float("-inf")] * 3
    mesh_count = 0
    point_count = 0

    for prim in Usd.PrimRange(root):
        if not prim.IsA(UsdGeom.Mesh):
            continue
        if UsdGeom.Imageable(prim).ComputeVisibility() == UsdGeom.Tokens.invisible:
            continue
        mesh_count += 1
        points = UsdGeom.Mesh(prim).GetPointsAttr().Get() or []
        point_count += len(points)
        matrix = xforms.GetLocalToWorldTransform(prim)
        for point in points:
            transformed = matrix.Transform(point)
            for axis in range(3):
                low[axis] = min(low[axis], transformed[axis])
                high[axis] = max(high[axis], transformed[axis])
    return mesh_count, point_count, (low, high)


def connected_source(input_: UsdShade.Input) -> str:
    result = input_.GetConnectedSources()
    sources = result[0] if isinstance(result, tuple) else result
    if not sources:
        return ""
    source = sources[0]
    return f"{source.source.GetPath()}.{source.sourceName}"


def inspect(path: Path) -> None:
    stage = Usd.Stage.Open(str(path))
    if not stage:
        raise RuntimeError(f"Could not open {path}")

    print(f"FILE {path.name}")
    default = stage.GetDefaultPrim()
    print(f"DEFAULT {default.GetPath() if default else '<none>'}")
    for child in stage.GetPseudoRoot().GetChildren():
        meshes, points, bounds = mesh_stats(stage, child)
        imageable = UsdGeom.Imageable(child)
        visibility = imageable.ComputeVisibility() if imageable else ""
        purpose = imageable.ComputePurpose() if imageable else ""
        print(
            f"TOP {child.GetPath()} type={child.GetTypeName()} active={child.IsActive()} "
            f"vis={visibility} purpose={purpose} variants=[{describe_variants(child)}] "
            f"meshes={meshes} points={points} bounds={bounds[0]}->{bounds[1]}"
        )
        for branch in child.GetChildren():
            meshes, points, bounds = mesh_stats(stage, branch)
            imageable = UsdGeom.Imageable(branch)
            visibility = imageable.ComputeVisibility() if imageable else ""
            purpose = imageable.ComputePurpose() if imageable else ""
            print(
                f"  BRANCH {branch.GetPath()} type={branch.GetTypeName()} active={branch.IsActive()} "
                f"vis={visibility} purpose={purpose} variants=[{describe_variants(branch)}] "
                f"meshes={meshes} points={points} bounds={bounds[0]}->{bounds[1]}"
            )

    interpolation_counts: Counter[str] = Counter()
    orientation_counts: Counter[str] = Counter()
    subdivision_counts: Counter[str] = Counter()
    uv_counts: Counter[str] = Counter()
    visible_meshes = 0
    for prim in stage.Traverse():
        if not prim.IsA(UsdGeom.Mesh):
            continue
        mesh = UsdGeom.Mesh(prim)
        if UsdGeom.Imageable(prim).ComputeVisibility() != UsdGeom.Tokens.invisible:
            visible_meshes += 1
        interpolation_counts[str(mesh.GetNormalsInterpolation())] += 1
        orientation_counts[str(mesh.GetOrientationAttr().Get())] += 1
        subdivision_counts[str(mesh.GetSubdivisionSchemeAttr().Get())] += 1
        for primvar in UsdGeom.PrimvarsAPI(prim).GetPrimvars():
            if primvar.GetPrimvarName() in ("st", "uv", "UVMap"):
                uv_counts[f"{primvar.GetPrimvarName()}:{primvar.GetInterpolation()}"] += 1
    print(f"VISIBLE_MESHES {visible_meshes}")
    print(f"NORMALS {dict(interpolation_counts)}")
    print(f"ORIENTATION {dict(orientation_counts)}")
    print(f"SUBDIVISION {dict(subdivision_counts)}")
    print(f"UVS {dict(uv_counts)}")

    printed = 0
    for prim in stage.Traverse():
        if not prim.IsA(UsdShade.Material):
            continue
        material = UsdShade.Material(prim)
        shader = material.ComputeSurfaceSource()[0]
        if not shader:
            continue
        print(f"MATERIAL {prim.GetPath()} shader={shader.GetPath()} id={shader.GetIdAttr().Get()}")
        for input_ in shader.GetInputs():
            value = input_.Get()
            connection = connected_source(input_)
            if value is not None or connection:
                print(f"  {input_.GetBaseName()} value={value!r} source={connection}")
        for texture_prim in Usd.PrimRange(prim):
            if not texture_prim.IsA(UsdShade.Shader) or texture_prim == shader.GetPrim():
                continue
            texture = UsdShade.Shader(texture_prim)
            texture_id = texture.GetIdAttr().Get()
            if texture_id in ("UsdUVTexture", "ND_image_color3", "ND_image_color4"):
                print(f"  TEXTURE {texture.GetPath()} id={texture_id}")
                for input_ in texture.GetInputs():
                    if input_.GetBaseName() in ("file", "sourceColorSpace", "wrapS", "wrapT"):
                        print(f"    {input_.GetBaseName()}={input_.Get()!r}")
        printed += 1
        if printed >= 8:
            break


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("Usage: explore_usdz.py <file.usdz>")
    inspect(Path(sys.argv[1]))

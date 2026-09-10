from __future__ import annotations

import sys
from collections import Counter
from pathlib import Path

from pxr import Usd, UsdGeom, UsdShade


def inspect(path: Path) -> None:
    stage = Usd.Stage.Open(str(path))
    if not stage:
        raise RuntimeError(f"Could not open {path}")

    type_counts: Counter[str] = Counter()
    mesh_rows: list[tuple[str, int, int, str]] = []
    material_rows: list[tuple[str, list[str]]] = []

    for prim in stage.Traverse():
        type_counts[prim.GetTypeName()] += 1
        if prim.IsA(UsdGeom.Mesh):
            mesh = UsdGeom.Mesh(prim)
            points = mesh.GetPointsAttr().Get() or []
            indices = mesh.GetFaceVertexIndicesAttr().Get() or []
            binding = UsdShade.MaterialBindingAPI(prim).ComputeBoundMaterial()[0]
            mesh_rows.append((str(prim.GetPath()), len(points), len(indices), str(binding.GetPath()) if binding else ""))
        elif prim.IsA(UsdShade.Material):
            material = UsdShade.Material(prim)
            shader = material.ComputeSurfaceSource()[0]
            inputs = [item.GetBaseName() for item in shader.GetInputs()] if shader else []
            material_rows.append((str(prim.GetPath()), inputs))

    bbox_cache = UsdGeom.BBoxCache(Usd.TimeCode.Default(), [UsdGeom.Tokens.default_, UsdGeom.Tokens.render])
    bounds = bbox_cache.ComputeWorldBound(stage.GetPseudoRoot()).ComputeAlignedBox()
    print(f"FILE {path.name}")
    print(f"UP {UsdGeom.GetStageUpAxis(stage)} METERS {UsdGeom.GetStageMetersPerUnit(stage)}")
    print(f"BOUNDS {bounds.GetMin()} -> {bounds.GetMax()}")
    print(f"TYPES {dict(type_counts)}")
    print(f"MESHES {len(mesh_rows)} POINTS {sum(row[1] for row in mesh_rows)} INDICES {sum(row[2] for row in mesh_rows)}")
    for row in sorted(mesh_rows, key=lambda value: value[1], reverse=True)[:25]:
        print(f"MESH {row[1]:>7} pts {row[2]:>8} idx material={row[3]} path={row[0]}")
    print(f"MATERIALS {len(material_rows)}")
    for material_path, inputs in material_rows[:40]:
        print(f"MAT {material_path} inputs={','.join(inputs)}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("Usage: inspect_usdz.py <file.usdz>")
    inspect(Path(sys.argv[1]))

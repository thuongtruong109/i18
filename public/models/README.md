# Official product models

- `iphone-18-pro.usdz` — source AR asset from Apple's iPhone 18 Pro product page.
- `iphone-duo.usdz` — source AR asset from Apple's iPhone Duo product page.
- `iphone-18-pro*.glb` — browser-ready exports for Apple's Burgundy, Glacier, Silver, and Black variants.
- `iphone-duo.glb` / `iphone-duo-night-sky.glb` — browser-ready Duo color exports.

The Three.js experience loads the GLB exports. They retain the source meshes, per-vertex normals,
face-varying UVs, textures, and PBR material values; `scripts/convert_usdz_to_glb.py` performs the conversion.

Original public AR URLs:

- https://www.apple.com/105/media/us/iphone-18-pro/2026/591df885-5ee2-4173-86e6-401021249f7c/ar/iphone-18-pro-e-sim.usdz
- https://www.apple.com/105/media/us/iphone-duo/2026/9305e4b9-72d9-4c05-9381-b572adadd5e5/ar/iPhone_Duo_e-sim_Star-White_Variant.usdz

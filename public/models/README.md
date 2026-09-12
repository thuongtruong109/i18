# Official product models

- `iphone-18-pro.usdz` — source AR asset from Apple's iPhone 18 Pro product page.
- `iphone-duo.usdz` — source AR asset from Apple's iPhone Duo product page.
- `iphone-17-pro.usdz` — shared source AR scene from Apple's iPhone comparison page; it contains distinct iPhone 17 Pro and iPhone 17 Pro Max meshes in Cosmic Orange.
- `iphone-air.usdz` — source AR asset from Apple's iPhone Air product page (Sky Blue).
- `iphone-17.usdz` — source AR asset from Apple's iPhone 17 product page (Lavender).
- `iphone-17e.usdz` — source AR asset from Apple's iPhone 17e product page (Soft Pink).
- `iphone-16-pro.usdz` / `iphone-16-pro-max.usdz` — separate Apple AR assets for the Pro sizes in Desert Titanium.
- `iphone-16.usdz` / `iphone-16-plus.usdz` — separate Apple AR assets for the base sizes in Ultramarine.
- `iphone-16e.usdz` — Apple AR asset for iPhone 16e in White.
- `iphone-18-pro*.glb` — browser-ready exports for Apple's Burgundy, Glacier, Silver, and Black variants.
- `iphone-duo.glb` / `iphone-duo-night-sky.glb` — browser-ready Duo color exports.
- `iphone-17-pro.glb` / `iphone-17-pro-max.glb` — separate browser-ready exports of the Pro and Pro Max subtrees from Apple's shared Cosmic Orange scene.
- `iphone-air.glb`, `iphone-17.glb`, and `iphone-17e.glb` — browser-ready exports of the representative AR finish published on each Apple product page.
- `iphone-16-pro*.glb`, `iphone-16*.glb`, and `iphone-16e.glb` — browser-ready exports of all five iPhone 16 series devices.

The Three.js experience loads the GLB exports. They retain the source meshes, per-vertex normals,
face-varying UVs, textures, and PBR material values; `scripts/convert_usdz_to_glb.py` performs the conversion.

Original public AR URLs:

- https://www.apple.com/105/media/us/iphone-18-pro/2026/591df885-5ee2-4173-86e6-401021249f7c/ar/iphone-18-pro-e-sim.usdz
- https://www.apple.com/105/media/us/iphone-duo/2026/9305e4b9-72d9-4c05-9381-b572adadd5e5/ar/iPhone_Duo_e-sim_Star-White_Variant.usdz
- https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/ar/iphone-17-pro-e-sim.usdz
- https://www.apple.com/105/media/us/iphone-air/2025/731189b1-a606-493f-afa4-7c766a8fd08d/ar/iphone-air-e-sim.usdz
- https://www.apple.com/105/media/us/iphone-17/2025/b2c72de3-1cbc-4e24-b4d3-23c7abcec4ec/ar/iphone-17-e-sim.usdz
- https://www.apple.com/105/media/us/iphone/shared/ar/2026/44fa1631-e6c3-4596-b59b-0d58f7e8735c/iphone-17e/iphone-17e-e-sim-soft-pink.usdz
- https://www.apple.com/105/media/us/iphone/shared/ar/2024/1db11f29-1385-4ae5-bbfd-2c885f4463d4/iphone-16-pro/iphone-16-pro-no-sim-desert-titanium.usdz
- https://www.apple.com/105/media/us/iphone/shared/ar/2024/1db11f29-1385-4ae5-bbfd-2c885f4463d4/iphone-16-pro/iphone-16-pro-max-no-sim-desert-titanium.usdz
- https://www.apple.com/105/media/us/iphone/shared/ar/2024/1db11f29-1385-4ae5-bbfd-2c885f4463d4/iphone-16/iphone-16-ultramarine-no-sim.usdz
- https://www.apple.com/105/media/us/iphone/shared/ar/2024/1db11f29-1385-4ae5-bbfd-2c885f4463d4/iphone-16/iphone-16-plus-ultramarine-no-sim.usdz
- https://www.apple.com/105/media/us/iphone/shared/ar/2025/aa5fba56-f772-4712-9d4c-0516416169e3/iphone-16e/iphone16_e_white.usdz

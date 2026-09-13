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
- `iphone-15-pro.usdz` / `iphone-15-pro-max.usdz` — separate Apple AR assets for the Pro sizes in Natural Titanium.
- `iphone-15.usdz` / `iphone-15-plus.usdz` — separate Apple AR assets for the base sizes in Pink.
- `ipad-pro-m5.usdz` — Apple AR asset for iPad Pro in Space Black.
- `ipad-air-m4.usdz` — Apple AR asset for iPad Air in Blue with its published accessories.
- `ipad-a16.usdz` — Apple AR asset for iPad in Pink.
- `ipad-mini-a17-pro.usdz` — Apple AR asset for iPad mini in Purple.
- `apple-watch-series-11.usdz` — Apple AR asset for Apple Watch Series 11 in Rose Gold with a Light Blush Sport Band.
- `apple-watch-ultra-3.usdz` — Apple AR asset for Apple Watch Ultra 3 in Natural Titanium.
- `apple-watch-se-3.usdz` — Apple AR asset for Apple Watch SE 3 in Midnight.
- `airpods-5.usdz` — Apple AR asset for AirPods 5 in White.
- `airpods-pro-3.usdz` — Apple AR asset for AirPods Pro 3 in White.
- `airpods-max-2.usdz` — Apple AR asset for AirPods Max 2 with Apple's Midnight color variant selected for the browser export.
- `macbook-air-m5.usdz` — Apple AR asset for the 13-inch MacBook Air with M5 in Sky Blue.
- `macbook-pro-m5.usdz` — Apple AR asset for the 14-inch MacBook Pro M5 family in Space Black.
- `imac-m4.usdz` — Apple AR asset for the blue iMac M4 with color-matched accessories.
- `mac-mini-m6.usdz` — Apple AR asset for the silver Mac mini M6 / M5 Pro enclosure.
- `mac-studio-m5.usdz` — Apple AR asset for the silver Mac Studio M5 Max / M5 Ultra enclosure.
- `mac-pro-m2-ultra.usdz` — Apple AR asset for the final Mac Pro with M2 Ultra. Apple no longer lists Mac Pro in the current lineup, but the original 2023 USDZ remains available on Apple's CDN.
- `iphone-18-pro*.glb` — browser-ready exports for Apple's Burgundy, Glacier, Silver, and Black variants.
- `iphone-duo.glb` / `iphone-duo-night-sky.glb` — browser-ready Duo color exports.
- `iphone-17-pro.glb` / `iphone-17-pro-max.glb` — separate browser-ready exports of the Pro and Pro Max subtrees from Apple's shared Cosmic Orange scene.
- `iphone-air.glb`, `iphone-17.glb`, and `iphone-17e.glb` — browser-ready exports of the representative AR finish published on each Apple product page.
- `iphone-16-pro*.glb`, `iphone-16*.glb`, and `iphone-16e.glb` — browser-ready exports of all five iPhone 16 series devices.
- `iphone-15-pro*.glb` and `iphone-15*.glb` — browser-ready exports of all four iPhone 15 series devices.
- `ipad-pro-m5.glb`, `ipad-air-m4.glb`, `ipad-a16.glb`, and `ipad-mini-a17-pro.glb` — browser-ready exports of the current iPad families.
- `apple-watch-series-11.glb`, `apple-watch-ultra-3.glb`, and `apple-watch-se-3.glb` — browser-ready exports of the latest complete Apple Watch lineup for which Apple published public AR assets.
- `airpods-5.glb`, `airpods-pro-3.glb`, and `airpods-max-2.glb` — indexed browser-ready exports of Apple's current AirPods, AirPods Pro, and AirPods Max AR scenes.
- `macbook-air-m5.glb`, `macbook-pro-m5.glb`, `imac-m4.glb`, `mac-mini-m6.glb`, `mac-studio-m5.glb`, and `mac-pro-m2-ultra.glb` — browser-ready exports for all six requested Mac branches.

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
- https://www.apple.com/105/media/us/iphone/shared/ar/2023/f6ca1075-bfa5-441b-b6c2-61e5ce4c15b2/iphone-15-pro/iphone_15_pro_natural_titanium_5G.usdz
- https://www.apple.com/105/media/us/iphone/shared/ar/2023/f6ca1075-bfa5-441b-b6c2-61e5ce4c15b2/iphone-15-pro/iphone_15_pro_max_natural_titanium_5G.usdz
- https://www.apple.com/105/media/us/iphone/shared/ar/2023/f6ca1075-bfa5-441b-b6c2-61e5ce4c15b2/iphone-15/iphone_15_pink_5G.usdz
- https://www.apple.com/105/media/us/iphone/shared/ar/2023/f6ca1075-bfa5-441b-b6c2-61e5ce4c15b2/iphone-15/iphone_15_plus_pink_5G.usdz
- https://www.apple.com/105/media/us/ipad-pro/2025/adee90db-c01e-430d-b726-fe64c0063f08/ar/ipad-pro-space-black.usdz
- https://www.apple.com/105/media/us/ipad-air/2025/e184d49a-4015-42ae-8a8b-db06bfeabd75/ar/ipad-air-blue-with-accessories.usdz
- https://www.apple.com/105/media/us/ipad-11/2025/21af9618-666d-4368-9fb9-38822c35dc35/ar/ipad-11-pink.usdz
- https://www.apple.com/105/media/us/ipad-mini/2024/ab503ae9-d404-4d31-8983-47a8cb46614f/ar/ipad-mini-purple.usdz
- https://www.apple.com/105/media/us/apple-watch-series-11/2025/cb7dae4b-d675-49db-8fe3-d4f635c1a345/ar/watch-series-11.usdz
- https://www.apple.com/105/media/us/apple-watch-ultra-3/2025/dabb0ca4-1556-466c-a314-ae3ba2cc088e/ar/watch-ultra-3.usdz
- https://www.apple.com/105/media/us/apple-watch-se-3/2025/499c4097-d6f9-4dbe-b2c3-7cdf022ce822/ar/watch-se-3.usdz
- https://www.apple.com/105/media/us/airpods-5/2026/1bae77a6-82ef-46c2-875f-571e880dbfe2/ar/airpods-mid.usdz
- https://www.apple.com/105/media/us/airpods-pro/2025/7acffb13-4adb-40b1-9393-8f1c99bc6c90/ar/airpods-pro.usdz
- https://www.apple.com/105/media/us/airpods-max/2024/e8f376d6-82b2-40ca-8a22-5f87de755d6b/ar/airpods-max-midnight-variant.usdz
- https://www.apple.com/105/media/us/macbook-air/2026/ff11cb38-708e-4c28-9653-1b01a2f8fd2b/ar/macbook-air-13in-sky-blue.usdz
- https://www.apple.com/105/media/us/macbook-pro/2025/785e1bc4-d1bd-4cf4-b1b3-94b9411c9e74/ar/macbook-pro-14-in-space-black-variant.usdz
- https://www.apple.com/105/media/us/imac/2024/e1d50c6b-bc34-47bd-850d-379149b71fb8/ar/imac-with-accessories-blue.usdz
- https://www.apple.com/105/media/us/mac-mini/2026/2140fd43-1461-420d-942c-6f254535a9a4/ar/mac-mini-silver.usdz
- https://www.apple.com/105/media/us/mac-studio/2026/e5b92529-6fd3-439c-9461-9d111718310f/ar/mac-studio-studio.usdz
- https://www.apple.com/105/media/us/mac-pro/2023/77a557c5-d4ce-49bd-8298-c642195ed919/ar/mac_pro_ios16.usdz

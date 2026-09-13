# Apple Product Lab interactive 3D

An extensible Apple product catalog built with React, Three.js, Vinext, and the
Cloudflare runtime. The product selector separates iPhone, iPad, Apple Watch,
Mac, AirPods, and Apple Vision into independent catalog boundaries.

The iPhone catalog includes iPhone 18 Pro, iPhone Duo, and the complete iPhone
17, iPhone 16, and iPhone 15 families. The iPad catalog includes iPad Pro M5,
iPad Air M4, iPad A16, and iPad mini A17 Pro. The Apple Watch catalog includes
Apple Watch Series 11, Apple Watch Ultra 3, and Apple Watch SE 3. The AirPods
catalog includes AirPods 5, AirPods Pro 3, and AirPods Max 2. Their browser-ready
models are converted from Apple's public AR assets. The Mac catalog includes
MacBook Air M5, MacBook Pro M5, iMac M4, Mac mini M6, Mac Studio M5, and the
final Mac Pro with M2 Ultra. Apple Vision exposes its planned series and can
receive dedicated model, finish, copy, and AR modules without coupling it to
the existing catalogs.

Apple introduced Series 12 and Ultra 4 in September 2026, but their current
product pages do not publish downloadable USDZ assets. The catalog therefore
uses Series 11, Ultra 3, and SE 3: the latest model in each Apple Watch branch
for which Apple has published a public AR source, rather than relabeling an
older mesh as a newer device.

Apple no longer lists Mac Pro in its current Mac lineup and `/mac-pro/` now
redirects to the Mac overview. The catalog preserves Apple's last Mac Pro,
the 2023 M2 Ultra model, using the USDZ that its former product page published.

The control dock follows the hierarchy `Product → Series → Model → Finish`.

## Requirements

- Node.js 22.13 or newer

## Development

```sh
npm run install:ci
npm run dev
```

The local preview starts at `http://localhost:5173`.

## Validation

```sh
npm run lint
npm run build
```

## Cloudflare

Cloudflare deployment support is intentionally retained through:

- `@cloudflare/vite-plugin`
- `wrangler`
- the bundled Sites Vite integration
- `.openai/hosting.json`

After building, preview the generated Cloudflare Worker locally with:

```sh
npm start
```

The project does not use a database, object storage, authentication, or migrations.

## 3D assets

Browser-ready product models are stored in `public/models`. Conversion details and
the original Apple AR source URLs are documented in `public/models/README.md`.

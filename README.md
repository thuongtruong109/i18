# Apple Product Lab interactive 3D

An extensible Apple product catalog built with React, Three.js, Vinext, and the
Cloudflare runtime. The product selector separates iPhone, iPad, Apple Watch,
Mac, AirPods, and Apple Vision into independent catalog boundaries.

The iPhone catalog includes iPhone 18 Pro, iPhone Duo, and the complete iPhone
17, iPhone 16, and iPhone 15 families. The iPad catalog includes iPad Pro M5,
iPad Air M4, iPad A16, and iPad mini A17 Pro. Their browser-ready models are
converted from Apple's public AR assets. Other product categories expose their
planned series and can receive dedicated model, finish, copy, and AR modules
without coupling them to the existing catalogs.

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

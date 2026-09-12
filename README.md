# iPhone lineup interactive 3D

An interactive iPhone lineup experience built with React, Three.js, Vinext, and
the Cloudflare runtime. It includes iPhone 18 Pro, iPhone Duo, and the complete
iPhone 17 family and iPhone 16 family, including each Pro, Pro Max, Plus, base,
Air, and e model Apple released in those generations. Every model is converted
from Apple's public AR assets.

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

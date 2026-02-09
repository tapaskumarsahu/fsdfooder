# FSDFooder — Frontend

A fast, component-driven frontend for FSDFooder built with React and Vite. This repository contains the UI, components, and styles for the customer-facing web app (menus, booking, blogs, contact, and static pages).

**Status:** Active — development-ready frontend scaffold.

**Tech stack:** React, Vite, CSS Modules, modern JavaScript (ESNext)

## Quick Start

Prerequisites
- Node.js 16+ (or compatible LTS)
- npm (or yarn)

Install dependencies

```bash
npm install
```

Run in development (hot-reload)

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build locally

```bash
npm run preview
```

## Available npm scripts
- `dev` — start Vite dev server
- `build` — produce optimized production build
- `preview` — locally preview production build

## Folder overview
- `src/` — application source code
	- `components/` — reusable UI components grouped by feature
	- `pages/` — page-level components used by the router
	- `assets/` — images and static media
	- `main.jsx`, `App.jsx` — app entry and routing

## Conventions
- CSS Modules for component styling (`*.module.css`)
- Components are small, focused, and colocated with their styles
- Asset paths in `src/assets/` and imported where used

## Features
- Responsive layout and component-based pages (Home, Menu, Blogs, Contact, Book Table)
- Reusable components (buttons, navbars, cards, sections)

## Deployment
Build the app (`npm run build`) and deploy the static output from the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront).

## Contributing
Open a PR with a clear title and description. Follow existing code style and keep changes focused. For larger changes, open an issue first to discuss.

## License
MIT — see LICENSE file (or add one) for full terms.

---
If you'd like, I can also run the dev server, lint/format files, or prepare a minimal CONTRIBUTING.md next.
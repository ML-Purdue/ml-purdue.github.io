# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static marketing/informational website for ML@Purdue (mlpurdue.com), built with **Astro 2.10** + **Tailwind CSS**. Content is dark-themed and space-styled. There is no backend and no test suite.

## Commands

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Install dependencies                            |
| `npm run dev`     | Dev server at `localhost:3000`                  |
| `npm run build`   | Production build to `./dist/`                   |
| `npm run preview` | Preview the production build locally            |
| `npm run format`  | Format all files with Prettier                  |
| `npm run clean`   | Remove `node_modules`, `dist`, and `.astro`     |

There is no linter and no test runner configured. `npm run format` (Prettier, with the astro + tailwind plugins) is the only code-quality gate.

## Deployment

Pushing to `master` triggers `.github/workflows/astro.yml`, which builds with Node 24 and deploys `dist/` to GitHub Pages. The live `site` is `https://ml-purdue.github.io` (config in `astro.config.mjs`), served at the custom domain mlpurdue.com. There is no staging environment — a merge to `master` is a production deploy.

## Architecture

**Data-driven content.** The bulk of the site's substance lives in `src/data-entries.ts` as typed arrays — `projectItems`, plus reading-group and workshop entries — with shapes defined in `src/types.ts` (`ProjectItem`, `RGItem`, `WorkshopItem`). To add/edit a project, reading-group session, or workshop, edit these arrays rather than touching page markup. Pages import these arrays and render them through components in `src/components/`. When adding a field, update the interface in `src/types.ts` first.

**Pages** (`src/pages/*.astro`) map 1:1 to routes (`projects.astro` → `/projects`). Navigation is defined as the `navItems` array in `src/components/header.astro` — add a route there to surface it in the nav. Note: most pages currently re-declare their own full `<html>`/`<head>` boilerplate (title, OG/Twitter meta) inline instead of using `src/layout/base.astro`. When editing head/meta, expect to change it per-page.

**Styling.** Tailwind is configured in `tailwind.config.cjs`. Colors are indirected through CSS variables (`bg-default`, `text-offset`, `primary`, `secondary`, etc.) defined in `src/styles/theme.css` under `[data-theme]` selectors. The site is hardcoded to `data-theme="dark"` on `<html>`; the light palette exists but is unused. The core `fontSize` plugin is disabled in favor of `tailwindcss-fluid-type` — use the fluid type scale rather than raw `text-*` sizes.

**Path alias.** `~/*` maps to `src/*` (see `tsconfig.json`). TypeScript runs in Astro strict mode.

**Assets.** Images live in `src/assets/` (imported and optimized via `@astrojs/image`/sharp) — team headshots in `src/assets/team/`, blog images in `src/assets/blog/`. Files in `public/` are served as-is at the root (favicons, PDFs, `social.png`).

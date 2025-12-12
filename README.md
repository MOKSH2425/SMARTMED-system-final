# SMARTMED Frontend — Redesigned

This repository contains the frontend for SMARTMED, redesigned with a modern, vibrant UI.

What I changed
- Introduced a new landing page (`/`) with a bold hero and CTAs.
- Reworked global design tokens (teal `smartmed` palette + `coral` accent) in `tailwind.config.js`.
- Added gradient and coral button variants — use `variant="gradient"` for hero CTAs.
- Rebuilt core pages (Home, Doctors, Appointments, Auth, Profile, Symptom Checker) to match the new design language.
- Accessibility improvements: skip link, `aria-live` / `role="status"` for dynamic messages, better focus outlines.
- Added a simple landing illustration at `src/assets/landing-illustration.svg`.

Run locally
```powershell
cd 'c:\Users\shahm\OneDrive\Desktop\DE_FINAL\SMART24\smartmed-frontend'
npm install
npm run dev
```

Notes
- I started the Vite dev server during the session — open the URL printed by Vite (typically http://localhost:5173).
- There are a couple of moderate vulnerabilities reported by `npm audit`. You can run `npm audit fix` to attempt automatic remediation; I've run it for you in this session and will report back.

Suggested commit message / PR title
```
feat(ui): redesign site — landing page, new palette, gradient CTAs, accessibility improvements
```

If you'd like, I can now:
- Polish hero illustration and add animations,
- Continue accessibility pass (aria attributes, keyboard traps),
- Create a PR and push changes (if you want me to prepare a commit message and instructions),
- Run further dependency updates (`npm audit fix --force`) — note `--force` may upgrade major versions.

Quick commit & PR steps
1. Create a branch and commit changes:
```bash
git checkout -b feat/ui-landing-redesign
git add .
git commit -m "feat(ui): redesign site — landing page, new palette, gradient CTAs, accessibility improvements"
```
2. Push and open a PR (example for origin):
```bash
git push -u origin feat/ui-landing-redesign
# Then open a pull request on GitHub with the title above and a short description.
```

If you want, I can prepare the patch as a single commit or split into multiple commits (layout, pages, accessibility, assets). Tell me which you prefer and I will prepare a suggested commit plan.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # SMARTMED — Frontend

    This repository contains the frontend for SMARTMED, a prototype healthcare web application built with React, TypeScript, Vite and Tailwind CSS. It's a feature-focused prototype: authentication (mocked), doctor browsing, appointments, and a symptom checker.

    > Note: this is a prototype. The frontend currently uses in-memory/mock implementations for auth and data. Refreshing the page will reset in-memory state.

    ## Tech stack

    - React + TypeScript
    - Vite (rolldown-vite)
    - Tailwind CSS + PostCSS (ESM-compatible config)
    - React Router v7
    - React Hook Form + Zod for forms
    - @tanstack/react-query (data caching)
    - Heroicons for icons

    ## Quick start

    Prerequisites

    - Node.js 16+ (recommended)
    - npm

    Install dependencies

    ```powershell
    npm install
    ```

    Run development server

    ```powershell
    npm run dev
    ```

    Open http://localhost:5173/ in your browser.

    Build for production and preview

    ```powershell
    npm run build
    npm run preview
    ```

    Linting and type checks

    ```powershell
    npx tsc --noEmit
    npm run lint
    ```

    ## Project structure

    - `src/`
      - `pages/` — App pages (Home, Doctors, Doctor detail, Appointments, Symptom Checker, Auth, Profile)
      - `components/` — Small UI components and layout (Header, Footer, Button, Card, Badge)
      - `contexts/` — `AuthContext.tsx` provides a simple auth provider and hooks
      - `lib/` — small mocks and utilities (e.g. `authMocks.ts`)
      - `index.css`, `tailwind.config.js`, `postcss.config.js` — styling config

    ## Mocks & Limitations

    - Authentication and data are mocked in `src/lib/authMocks.ts` and `src/contexts/AuthContext.tsx`.
    - There is no persistence: appointments and auth state are in-memory only.

    ## Recommended next steps

    - Replace the mocked module with real API endpoints and environment variables.
    - Add E2E tests (Cypress or Playwright) to validate flows like booking.
    - Add CI (GitHub Actions) to run `npx tsc --noEmit` and `npm run lint` on PRs.

    ## Contributing

    1. Fork or branch from `main`.
    2. Implement changes and run the dev server locally.
    3. Open a PR describing the changes and include screenshots where helpful.

    ## License

    This prototype is provided as-is. Add a LICENSE file to apply a license.

    ---

    If you want, I can add a GitHub Actions workflow that runs typecheck and lint on push/PRs and push it to the repo.

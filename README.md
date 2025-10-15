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

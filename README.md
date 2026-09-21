# Asociația O Singură Inimă pentru Comunitate

Website for Asociația O Singură Inimă pentru Comunitate, built with React + Vite. Content is in Romanian.

## Getting started

```sh
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build for production into dist/
npm run preview  # preview the production build
```

## Stack

- **Vite + React (TypeScript)** — minimal SPA scaffold
- **react-router-dom** — URL routing for the site pages (see `src/router.tsx` and `src/nav-items.ts`)
- **`src/site-data.ts`** — contact details, bank data and social links; empty fields render as "se completează în curând"
- **CSS Modules + global design tokens** — brand colors live as CSS custom properties in `src/styles/global.css`
- **Roboto** — self-hosted via `@fontsource-variable/roboto` (no external font requests)

## Brand palette

| Token                  | Value     | Use                              |
| ---------------------- | --------- | -------------------------------- |
| `--color-base`         | `#ffffff` | Page background                  |
| `--color-primary`      | `#152c7e` | Logo text, links, buttons        |
| `--color-accent-green` | `#63ba49` | Logo shapes, stat accents        |
| `--color-accent-gold`  | `#d8ac53` | Logo shapes, card accents        |
| `--color-highlight-green` | `#4c8b34` | Text accents (`.motto` fragments) |
| `--color-highlight-blue` | `#0f318a` | Text highlights (`.hl-blue`)   |
| `--color-highlight-gold` | `#a2822d` | Text highlights (`.hl-gold`)   |

## Deploying to GitHub Pages

Deployment uses the official GitHub Actions integration (see
[Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)).

1. Push this folder to a GitHub repository on the `main` branch:

   ```sh
   git init -b main
   git add -A
   git commit -m "Association site"
   gh repo create association --public --source=. --push
   ```

2. In the repository, open **Settings → Pages** and set **Source** to
   **GitHub Actions** (one-time). Every push to `main` then builds and
   deploys automatically to `https://<user>.github.io/<repo>/`.

How it works:

- `.github/workflows/deploy.yml` builds with `BASE_PATH=/<repo-name>/` so
  asset URLs and router links resolve under the repo subpath.
- `scripts/postbuild.mjs` copies `index.html` to `404.html`: GitHub Pages has
  no SPA fallback, and this lets deep routes like `/about` render on direct
  loads and refreshes instead of 404ing.

Notes:

- For a user/org site repo (`<user>.github.io`) or a custom domain, the site
  serves from the domain root — change the workflow's *Compute base path*
  step to output `/` (there is a ready-made comment for this in the file).
- Make sure `package-lock.json` is committed; the workflow uses `npm ci`.


# Jacobo Romero Díaz — Portfolio

A personal portfolio built with Next.js 15 from the NextJS Portfolio Template. The original template layout and styling are preserved. Its fields contain Jacobo's biography, projects, research experience, contact links, and documented technical skills; each project has a detail page.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Edit content

- Edit `src/data/data.js` for the biography, contact links, projects, experience, education, skills, and other content.
- The profile photo is deliberately blank. To use the included image at `public/profile.jpg`, set `about.photo` in `src/data/data.js` to `"/profile.jpg"`.
- The PeixeScan project screenshots live in `public/projects/peixescan/`.
- Every project in the `projects` array gets its own page at `/projects/[slug]`. The `featured` field controls whether it appears on the home page.

The contact page uses direct links to Jacobo's EPFL email, LinkedIn, and GitHub. There is no third-party contact form to configure.

## Publish to GitHub Pages

This repository publishes the portfolio at https://jacoboromerodiaz.github.io/ with GitHub Actions. `npm run build` creates the static `out/` directory, including the project detail pages. Every push to `main` starts the workflow in `.github/workflows/deploy-pages.yml`; it can also be run from the Actions tab.

In the repository's **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. The workflow needs the `github-pages` environment; GitHub creates it automatically when Pages uses Actions. The build uses Node.js 22 and `npm ci`.

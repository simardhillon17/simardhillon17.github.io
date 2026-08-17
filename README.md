# simardhillon17.github.io

Personal portfolio — **Astro 5 + Tailwind CSS 4 + TypeScript**. Static output,
minimal JS (a vanilla-canvas particle-network hero and a role rotator). Deployed
to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Editing content

All copy lives in [`src/data/site.ts`](src/data/site.ts) — name, roles, summary,
skills, experience, projects, certifications, education, and social links. Edit
that one file; components render from it.

Add your assets to `public/`:

- `public/resume.pdf` — linked from the nav "Resume" button.
- `public/og.png` — optional 1200×630 social share image.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. In the repo settings, set
**Settings → Pages → Build and deployment → Source = GitHub Actions** (one-time).

Because this repo is named `simardhillon17.github.io`, the site is served at the
account root: <https://simardhillon17.github.io>.

## Structure

```
src/
  data/site.ts        # all content
  layouts/Base.astro  # <head>, fonts, meta
  pages/index.astro   # the single page + all sections
  scripts/
    particles.ts      # hero canvas animation
    main.ts           # rotator, scroll-reveal, mobile navv
  styles/global.css   # Tailwind + theme tokens
public/               # static assets (resume.pdf, favicon, og image)
```

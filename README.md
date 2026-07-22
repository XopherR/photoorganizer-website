# SnapAtlas Website

Official marketing website for SnapAtlas - A Windows photo organization application.

## Tech Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Styling
- **GitHub Pages** - Hosting

## Development

```bash
npm install
astro dev --background
```

Visit http://localhost:4321

Manage the background dev server:

```bash
astro dev status
astro dev logs
astro dev stop
```

## Build

```bash
npm run build
```

Output: `dist/`

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions on push to `main`.

Workflow file:

- `.github/workflows/deploy.yml`

The workflow:

1. Installs dependencies with `npm ci`
2. Builds the Astro site with `npm run build`
3. Uploads `dist/` as a Pages artifact
4. Deploys to GitHub Pages

## Features

- Photo organization by date (year-month-day, year-day)
- Duplicate detection and removal
- Location intelligence (GPS to custom names)
- Batch operations and phone imports

## Target Audiences

- DataHoarders (500k+ photos)
- Family archivists
- Photographers
- Digital minimalists

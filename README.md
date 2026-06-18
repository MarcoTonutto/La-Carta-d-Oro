# La Carta d'Oro

Showcase site for the fan-made **La Carta d'Oro (5-Cards)** format — a concours d'elegance for Magic: The Gathering.

## Stack

- React 19 + Vite + TypeScript
- styled-components (atomic design + SOLID principles)
- React Router
- Vitest (scoring logic tests)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command           | Description        |
| ----------------- | ------------------ |
| `npm run dev`     | Development server |
| `npm run build`   | Production build   |
| `npm run preview` | Preview build      |
| `npm test`        | Run tests          |
| `npm run lint`    | ESLint             |

## Deploy to GitHub Pages

1. Create a GitHub repository (the repo name must match the `base` in `vite.config.ts`, e.g. `La-Carta-d-Oro`)
2. Push the code to the `main` branch
3. Configure GitHub Pages **once**:
   - Go to **Settings → Pages → Build and deployment**
   - **Source:** `Deploy from a branch`
   - **Branch:** `gh-pages` / `(root)`
   - Save
4. Every push to `main` runs the `.github/workflows/deploy.yml` workflow, which builds `dist/` and publishes it to the `gh-pages` branch

The site will be available at: `https://<username>.github.io/La-Carta-d-Oro/`

> **Important:** do not use the `main` branch as the Pages source. The `main` branch contains source code (Vite dev), not the build. If Pages points to `main`, the site stays blank because the browser tries to load `/src/main.tsx`.
>
> The `base` path in `vite.config.ts` must match the GitHub repository name exactly (case-sensitive).

To trigger a deploy manually: **Actions → Deploy to GitHub Pages → Run workflow**.

## Pages

- **Home** — Format overview
- **Rules** — Full official rules
- **How to play** — Step-by-step guide + printable scoring sheet
- **Calculator** — Score calculation (max 60) with tie-break on Ensemble Originality

## Notes

Fan-made format by Marco Tonutto, not affiliated with Wizards of the Coast.

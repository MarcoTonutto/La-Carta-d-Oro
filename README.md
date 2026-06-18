# La Carta d'Oro

Sito vetrina per il formato fan-made **La Carta d'Oro (5-Cards)** — un concours d'elegance per Magic: The Gathering.

## Stack

- React 19 + Vite + TypeScript
- styled-components (atomic design + principi SOLID)
- React Router
- Vitest (test logica punteggi)

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri [http://localhost:5173](http://localhost:5173).

## Script

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Server di sviluppo |
| `npm run build` | Build di produzione |
| `npm run preview` | Anteprima build |
| `npm test` | Esegue i test |
| `npm run lint` | ESLint |

## Deploy su GitHub Pages

1. Crea un repository GitHub (il nome del repo deve coincidere con il `base` in `vite.config.ts`, es. `La-Carta-d-Oro`)
2. Push del codice sul branch `main`
3. Configura GitHub Pages **una sola volta**:
   - Vai in **Settings → Pages → Build and deployment**
   - **Source:** `Deploy from a branch`
   - **Branch:** `gh-pages` / `(root)`
   - Salva
4. Ogni push su `main` esegue il workflow `.github/workflows/deploy.yml`, che builda `dist/` e lo pubblica sul branch `gh-pages`

Il sito sarà disponibile su: `https://<username>.github.io/La-Carta-d-Oro/`

> **Importante:** non usare il branch `main` come sorgente Pages. Il branch `main` contiene il codice sorgente (Vite dev), non la build. Se Pages punta a `main`, il sito resta bianco perché il browser tenta di caricare `/src/main.tsx`.
>
> Il `base` path in `vite.config.ts` deve corrispondere esattamente al nome del repository GitHub (case-sensitive).

Per rilanciare il deploy manualmente: **Actions → Deploy to GitHub Pages → Run workflow**.

## Pagine

- **Home** — Presentazione del formato
- **Regolamento** — Regole ufficiali complete
- **Come si gioca** — Guida passo-passo + foglio votazione stampabile
- **Calcolatore** — Calcolo punteggi (max 60) con tie-break su Originalità Ensemble

## Note

Formato fan-made, non affiliato con Wizards of the Coast.

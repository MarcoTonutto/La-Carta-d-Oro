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

1. Crea un repository GitHub chiamato `la-carta-doro`
2. Push del codice sul branch `main`
3. Vai in **Settings → Pages** e imposta **Source: GitHub Actions**
4. Il workflow `.github/workflows/deploy.yml` builda e pubblica automaticamente

Il sito sarà disponibile su: `https://<username>.github.io/la-carta-doro/`

> Il `base` path in `vite.config.ts` è già configurato per `/la-carta-doro/`.

## Pagine

- **Home** — Presentazione del formato
- **Regolamento** — Regole ufficiali complete
- **Come si gioca** — Guida passo-passo + foglio votazione stampabile
- **Calcolatore** — Calcolo punteggi (max 60) con tie-break su Originalità Ensemble

## Note

Formato fan-made, non affiliato con Wizards of the Coast.

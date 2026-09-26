# PhishGuard-AI

[![Live demo](https://img.shields.io/badge/Live_demo-Open_PhishGuard-0ea5e9?style=for-the-badge)](https://cod4nitish.github.io/PhishGuard-AI/)

An interactive **phishing-awareness and URL-security UX prototype**. PhishGuard-AI demonstrates how a modern security dashboard can guide a user through an apparent URL scan, visualise a threat landscape, and explain common malware risks.

**Live demo:** [cod4nitish.github.io/PhishGuard-AI](https://cod4nitish.github.io/PhishGuard-AI/)

> [!IMPORTANT]
> This repository is a frontend prototype, not a live malware-detection service. The scanner returns fixed simulated result data, the map creates animated random markers, and the monitoring/history views are presentation states. Do not rely on it to assess a URL's safety.

## What it demonstrates

- A focused scan flow with loading, risk score, indicators, and result states.
- A multi-page experience using hash-based routes: Scanner, Monitoring, and Scan History.
- An animated global threat-map visual built with `react-simple-maps`.
- Malware-awareness content, responsive layout, and motion-led feedback.

## Architecture and data boundaries

```mermaid
flowchart LR
    U[User] --> R[React app + HashRouter]
    R --> H[Scanner page]
    R --> M[Monitoring and History views]
    H --> S[Local state + simulated scan result]
    M --> T[Presentation-only monitoring/history data]
    R --> G[Global threat map]
    G --> W[World Atlas topology CDN]
    G --> X[Randomly generated animated markers]
    H -. optional visual preview .-> P[External thum.io screenshot service]
```

The URL preview feature passes the submitted URL to an external screenshot service (`thum.io`) so it can render a preview. Treat that as a third-party data-sharing boundary; do not submit sensitive or private URLs.

## Tech stack

| Area | Technology |
| --- | --- |
| UI | React 19, TypeScript, Vite |
| Navigation | React Router with `HashRouter` |
| Styling | Tailwind CSS, custom CSS |
| Visualisation | `react-simple-maps`, World Atlas topology |
| Motion and icons | Framer Motion, Lucide React |
| Deployment | GitHub Pages |

## Project structure

```text
src/
  components/       # Sidebar, map, awareness content, footer
  layouts/          # Shared application shell
  pages/            # Scanner, Monitoring, and History routes
  App.tsx           # HashRouter route map
  main.tsx          # React entry point
```

## Run locally

Prerequisite: Node.js 20 or newer.

```bash
git clone https://github.com/Cod4Nitish/PhishGuard-AI.git
cd PhishGuard-AI
npm ci --legacy-peer-deps
npm run dev
```

`react-simple-maps` currently declares an older React peer range than the React 19 app uses. `--legacy-peer-deps` is required to reproduce the existing lockfile until the visualisation dependency is upgraded or replaced.

Run the quality and production checks with:

```bash
npm run lint
npm run build
npm run preview
```

## Use the demo

1. Open the Scanner route and enter a non-sensitive example URL.
2. Select **Analyze URL** to view the simulated risk result.
3. Visit Monitoring for the animated visualisation and History for the static scan-history interface.

## Scope and next steps

To become a real security product, PhishGuard would need a secure backend, an authenticated threat-intelligence provider, server-side URL analysis, persisted audit history, rate limits, privacy controls, and clear handling for false positives/negatives. Those capabilities are intentionally outside the current prototype.

## Deploy

```bash
npm run deploy
```

The command builds the static site and publishes `dist/` to the `gh-pages` branch.

## License

No license has been selected for this repository yet. Add one before accepting external contributions or reuse.

# Abinaya Hariharan —  Portfolio

A responsive React + Vite portfolio with a dark navy / electric-blue visual system, glassmorphism cards, Framer Motion transitions and a React Three Fiber metallic hero sphere.

## Requirements
- Node.js 18 or newer
- npm
- VS Code (recommended)

## Run locally
1. Extract the ZIP.
2. Open the extracted `abinaya-premium-portfolio` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

## Personalize before publishing
- Project cards are in `src/data.js`.
- Add real project screenshots to `public/projects/` and update the project component when you have them.
- Add GitHub repository and live-demo URLs only after verifying the URLs; the starter intentionally does not invent them.
- Add a resume PDF as `public/resume.pdf` when you have the final resume, then add a download link to the hero or navigation.
- Add genuine testimonials, published articles and verified achievements when available.
- Confirm the exact project descriptions and technology stacks before publishing.

## Notes
- The 3D sphere uses Three.js through React Three Fiber and Drei.
- On devices with reduced-motion preference, the decorative 3D scene is hidden.
- The portfolio is frontend-only; no backend is required for the contact email link.

## Cursor Cloud specific instructions

This is a personal academic portfolio website built with **Next.js 16 + TypeScript + Tailwind CSS + Framer Motion**. It is a single-page application with scroll-based navigation.

### Running the site

```bash
npm run dev
```

Dev server runs at `http://localhost:3000/` with hot module replacement.

### Build & Export

```bash
npm run build
```

Static export is configured (`output: 'export'` in `next.config.ts`), producing files in `out/` for GitHub Pages deployment.

### Lint

```bash
npx eslint src/
```

### Key architecture notes

- All personal content (publications, education, experience, etc.) lives in `src/data/content.ts`. Edit this single file to update site content.
- Components are in `src/components/` — one file per section (Hero, About, Publications, Experience, MoreSections, Footer, Navbar).
- Animations use Framer Motion with scroll-triggered `useInView` hooks. Each section manages its own animation state.
- The site uses `react-icons` for icon sets (Feather Icons + Simple Icons).
- No backend, database, or API — purely static.

# Recipe 3D App

An immersive 3D recipe application inspired by [jesse-zhou.com](https://jesse-zhou.com).

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

- `specs/` — Documentation and session continuity
  - `PROJECT_OVERVIEW.md` — Core vision (never modify)
  - `CURRENT_STATE.md` — Session status (<100 lines)
  - `TECHNICAL_DECISIONS.md` — Append-only decision log
- `src/components/canvas/` — 3D React Three Fiber components
- `src/components/dom/` — 2D UI components
- `src/scenes/` — Complete 3D scene compositions
- `src/hooks/` — Custom React hooks
- `src/stores/` — Zustand state stores
- `src/lib/` — Utilities (three, animations, shaders)
- `src/assets/` — 3D models, textures, HDRIs

## Development Workflow

1. Read `specs/CURRENT_STATE.md` for current status
2. Work on tasks listed in "Next 3 Tasks"
3. Update `CURRENT_STATE.md` at end of session
4. Log major decisions in `TECHNICAL_DECISIONS.md`

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run ESLint
```

## Tech Stack

### Core
- **Framework:** Next.js 15 + TypeScript + React 19
- **Styling:** Tailwind CSS

### 3D & Animation
- **3D Engine:** Three.js
- **React Renderer:** @react-three/fiber
- **Helpers:** @react-three/drei
- **Post-processing:** @react-three/postprocessing
- **2D Animation:** Framer Motion
- **3D Animation:** @react-spring/three
- **Dev Tools:** Leva

### State & Data
- **State Management:** Zustand
- **Server State:** @tanstack/react-query
- **Database:** Supabase (coming soon)
- **AI:** OpenAI API (coming soon)

## Performance Budget

| Metric | Target |
|--------|--------|
| FPS | 60 |
| Draw Calls | <100 |
| Triangles/Scene | <100k |
| Bundle Size (JS) | <500KB |

## Features (Planned)

- [ ] 3D Recipe Browser with floating cards
- [ ] AI Recipe Generation (OpenAI)
- [ ] URL Recipe Import
- [ ] Voice Input (Web Speech API)
- [ ] Recipe CRUD with Supabase
- [ ] Immersive 3D scenes with post-processing
- [ ] Mobile-responsive 3D interactions

## Resources

- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [drei Helpers](https://github.com/pmndrs/drei)
- [Three.js Docs](https://threejs.org/docs/)
- [Jesse Zhou's Case Study](https://jesse-zhou.medium.com/jesses-ramen-case-study-77bae77ab5f0)

---

**Build in phases. Keep files small. Make it feel magical.** ✨

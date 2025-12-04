# Directory Structure Guide

Quick reference for where to place different types of files.

## 📁 specs/ - Documentation Layer

| Directory | Purpose | Rules |
|-----------|---------|-------|
| `PROJECT_OVERVIEW.md` | Core vision and goals | **NEVER MODIFY** |
| `CURRENT_STATE.md` | Session status | Rewrite each session, <100 lines |
| `TECHNICAL_DECISIONS.md` | Decision log | **APPEND ONLY** |
| `features/` | Feature specifications | Add new specs as needed |
| `scenes/` | 3D scene requirements | Scene designs and interactions |
| `interactions/` | Interaction patterns | Reusable interaction specs |
| `archive/` | Old decisions | Move old content here |

## 📁 src/app/ - Next.js App Router

| File/Directory | Purpose |
|----------------|---------|
| `layout.tsx` | Root layout with metadata |
| `page.tsx` | Home page |
| `globals.css` | Global styles |
| `(routes)/` | Route groups for organization |

## 📁 src/components/

### dom/ - 2D UI Components

| Directory | Purpose | Examples |
|-----------|---------|----------|
| `ui/` | Reusable primitives | Button, Card, Input, Modal |
| `layout/` | Layout components | Header, Footer, Sidebar, Navigation |

### canvas/ - 3D R3F Components

| Directory | Purpose | Examples |
|-----------|---------|----------|
| `objects/` | Individual 3D objects | RecipeCard, Ingredient, Kitchen |
| `effects/` | Post-processing & particles | Bloom, Particles, Fog |
| `controls/` | Camera & interactions | CustomOrbitControls, TouchControls |

## 📁 src/scenes/

Complete 3D scene compositions that combine multiple components.

**Examples:**
- `MainHub.tsx` - Kitchen environment with floating cards
- `RecipeBrowser.tsx` - 3D grid of recipes
- `RecipeDetail.tsx` - Immersive recipe view
- `AIGenerator.tsx` - Recipe generation interface

**Structure:**
```typescript
export function SceneName() {
  return (
    <>
      {/* Lighting */}
      {/* Environment */}
      {/* Objects */}
      {/* Effects */}
    </>
  )
}
```

## 📁 src/hooks/

Custom React hooks for reusable logic.

**Naming:** `use[Name].ts`

**Examples:**
- `useRecipe.ts` - Recipe CRUD operations
- `useSceneTransition.ts` - Scene transition animations
- `useMouseParallax.ts` - Mouse parallax effect
- `useVoiceInput.ts` - Web Speech API integration

## 📁 src/stores/

Zustand state stores for global state management.

**Naming:** `[name]Store.ts`

**Examples:**
- `recipeStore.ts` - Recipe data and actions
- `uiStore.ts` - UI state (modals, loading, etc.)
- `sceneStore.ts` - Active scene and transitions
- `cameraStore.ts` - Camera position and controls

## 📁 src/lib/

### three/
Three.js utilities and helpers.

**Examples:**
- `materials.ts` - Custom material presets
- `geometries.ts` - Reusable geometries
- `lighting.ts` - Lighting setup helpers
- `utils.ts` - Three.js helper functions

### animations/
Animation helpers and spring configurations.

**Examples:**
- `springs.ts` - React-spring presets
- `easings.ts` - Custom easing functions
- `lerp.ts` - Linear interpolation helpers
- `transitions.ts` - Scene transition logic

### shaders/
Custom GLSL shaders.

**Examples:**
- `glow.frag` - Glow effect shader
- `hologram.vert` - Holographic effect
- `distortion.frag` - Distortion shader
- `noise.glsl` - Noise functions (reusable)

## 📁 src/assets/

### models/
3D models in `.glb` or `.gltf` format.

**Optimization:**
- Use Draco compression
- Keep poly count <50k per model
- Merge materials where possible

### textures/
Texture files (PNG, JPG, WebP).

**Best Practices:**
- Power-of-2 dimensions (512, 1024, 2048)
- Use texture atlases for multiple small textures
- Compress with KTX2/Basis for large textures

### hdri/
Environment maps for reflections and lighting.

**Formats:** `.hdr`, `.exr`

## 📁 src/api/

API routes and client functions.

**Examples:**
- `openai.ts` - OpenAI API client
- `supabase.ts` - Supabase client setup
- `recipe-parser.ts` - URL recipe extraction

## 📁 src/types/

TypeScript type definitions.

**Examples:**
- `recipe.ts` - Recipe data types
- `scene.ts` - Scene configuration types
- `three.d.ts` - Custom Three.js type extensions

## 📁 public/assets/

Static assets served directly.

**Examples:**
- Fonts (`.woff2`)
- Icons and logos
- Favicon
- Open Graph images

---

## Quick Decision Tree

**Where do I put...?**

- 🎯 **A 3D recipe card component?** → `src/components/canvas/objects/RecipeCard.tsx`
- 🎯 **A complete kitchen scene?** → `src/scenes/MainHub.tsx`
- 🎯 **A reusable button?** → `src/components/dom/ui/Button.tsx`
- 🎯 **Recipe CRUD logic?** → `src/hooks/useRecipe.ts`
- 🎯 **Global recipe state?** → `src/stores/recipeStore.ts`
- 🎯 **A custom shader?** → `src/lib/shaders/myShader.frag`
- 🎯 **Animation spring configs?** → `src/lib/animations/springs.ts`
- 🎯 **A 3D model?** → `src/assets/models/kitchen.glb`
- 🎯 **An HDRI environment?** → `src/assets/hdri/sunset.hdr`
- 🎯 **OpenAI integration?** → `src/api/openai.ts`
- 🎯 **Recipe TypeScript types?** → `src/types/recipe.ts`
- 🎯 **A font file?** → `public/assets/fonts/`

---

**Keep files small (<300 lines). Split early, split often.**

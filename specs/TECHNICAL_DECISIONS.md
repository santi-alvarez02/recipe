# Technical Decisions Log

## 2025-12-04: Framework Choice
**Decision:** React Three Fiber over vanilla Three.js
**Rationale:** Better React integration, hooks-based API, smaller boilerplate, excellent ecosystem (drei helpers)
**Trade-off:** Slight abstraction overhead, but significantly faster development and better maintainability

## 2025-12-04: State Management
**Decision:** Zustand for global state
**Rationale:**
- Lightweight (~1KB minified)
- Excellent React Three Fiber compatibility
- Simple API with hooks
- Built-in devtools and persist middleware
**Alternatives:** Jotai (considered, too new), Context API (too verbose for complex state)

## 2025-12-04: Styling Approach
**Decision:** Tailwind CSS for 2D UI, Three.js materials for 3D
**Rationale:**
- Rapid UI development with utility classes
- Consistent design tokens
- Clear separation of concerns (2D vs 3D styling)
**Note:** Avoid mixing CSS animations with 3D transforms

## 2025-12-04: React Version Upgrade
**Decision:** Upgraded to React 19 + Next.js 15
**Rationale:**
- Latest @react-three/fiber requires React 19
- Next.js 15 has better App Router performance
- Future-proofing for new React features (Actions, use() hook)
**Migration:** No breaking changes for basic React usage

## 2025-12-04: TypeScript Configuration
**Decision:** Enabled strict mode with Three.js types
**Rationale:**
- Catch errors early in 3D code (vector operations, material properties)
- Better IDE autocomplete for Three.js API
- Type-safe props for R3F components

## 2025-12-04: Visual Style Transformation
**Decision:** Transform from realistic modern to flat vector illustration (cartoon) style
**Rationale:**
- **Unique identity** - Stands out from typical 3D web experiences
- **Better performance** - MeshToonMaterial is simpler than Standard/Physical materials
- **Matches brand** - Recipe app benefits from approachable, illustrated aesthetic
- **Inspired by success** - Jesse Zhou's Ramen Shop showed power of stylization
- **User preference** - Client requested modern minimalist cartoon vibe
**Alternatives considered:**
- Keep realistic (rejected: too generic, harder to make unique)
- Extreme cartoon/anime style (rejected: too childish for professional app)
- Photorealistic with ray tracing (rejected: performance nightmare on web)
**Implementation:**
- MeshToonMaterial with 3-tone gradient maps for cel-shading
- Drei's Outlines component for black strokes (0.025 thickness)
- Simplified lighting (fewer lights, clearer shadows)
- White highlights replace complex reflections/transmission
- Maintain white/cream color palette
**Expected benefits:**
- 10-15% FPS improvement (simpler materials)
- Unique visual identity (illustrated cookbook aesthetic)
- Better mobile performance
- Easier to maintain and iterate
**Trade-offs:**
- Loss of realistic material depth (acceptable for style)
- Outline scaling needs attention at different zoom levels
- Requires custom gradient map creation
**See:** `specs/STYLE_TRANSFORMATION.md` and `specs/features/CARTOON_STYLE_GUIDE.md`

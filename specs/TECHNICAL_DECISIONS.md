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

'use client'

import { Environment, ContactShadows } from '@react-three/drei'
import { Kitchen } from '@/components/canvas/objects/Kitchen'

/**
 * MainHub Scene - Modern Kitchen Environment
 *
 * The main homepage scene featuring:
 * - Modern kitchen environment
 * - Warm kitchen lighting
 * - Clean, minimal aesthetic
 */

export function MainHub() {
  return (
    <>
      {/* Lighting Setup - Warm kitchen ambiance */}
      <ambientLight intensity={0.4} />

      {/* Main overhead light */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Warm fill light from kitchen side */}
      <pointLight position={[-4, 3, -4]} intensity={0.6} color="#fff4e6" distance={12} />

      {/* Accent light for ambient glow */}
      <pointLight position={[0, 4, 0]} intensity={0.4} color="#ffeb9a" distance={10} />

      {/* Pendant lights over island */}
      <pointLight position={[-1, 1.2, 0]} intensity={1.2} color="#ffeb9a" distance={3} />
      <pointLight position={[1, 1.2, 0]} intensity={1.2} color="#ffeb9a" distance={3} />

      {/* Kitchen Environment */}
      <Kitchen />

      {/* Soft contact shadows on floor */}
      <ContactShadows
        position={[0, -1.99, 0]}
        opacity={0.4}
        scale={15}
        blur={2}
        far={4}
      />

      {/* Environment - subtle warm background */}
      <Environment preset="apartment" background blur={0.8} />

      {/* Fog for depth */}
      <fog attach="fog" args={['#f5f5f0', 8, 20]} />
    </>
  )
}

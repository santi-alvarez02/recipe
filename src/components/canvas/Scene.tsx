'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { MainHub } from '@/scenes/MainHub'

export function Scene() {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 60 }}
        shadows
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        {/* MainHub Scene */}
        <MainHub />

        {/* Camera Controls */}
        <OrbitControls
          target={[0, 0, 0]}
          enableZoom={true}
          enablePan={true}
          maxDistance={18}
          minDistance={5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}

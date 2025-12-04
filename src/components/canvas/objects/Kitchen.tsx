import { RoundedBox, Sphere, Cylinder } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

/**
 * Enhanced Modern Kitchen Environment Component
 *
 * Inspired by jesse-zhou.com's level of detail:
 * - Kitchen island with detailed elements
 * - Back counter with appliances
 * - Side counters with decor
 * - Multiple material types (wood, metal, glass)
 * - Emissive lighting elements
 * - Realistic proportions and details
 */

export function Kitchen() {
  const groupRef = useRef<Group>(null)
  const steamRef = useRef<Group>(null)

  // Subtle steam animation
  useFrame((state) => {
    if (steamRef.current) {
      steamRef.current.position.y = -0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      steamRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#f5f5f0"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Kitchen Island (center) */}
      <group position={[0, -1.2, 0]}>
        {/* Island countertop */}
        <RoundedBox args={[3.5, 0.15, 2]} radius={0.02} smoothness={4} position={[0, 0.5, 0]} castShadow>
          <meshStandardMaterial
            color="#2d2d2d"
            roughness={0.3}
            metalness={0.6}
          />
        </RoundedBox>

        {/* Island base */}
        <RoundedBox args={[3.2, 0.9, 1.8]} radius={0.05} smoothness={4} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.5}
            metalness={0.1}
          />
        </RoundedBox>

        {/* Island details - drawers */}
        <mesh position={[0, 0.15, 0.91]}>
          <boxGeometry args={[2.8, 0.15, 0.02]} />
          <meshStandardMaterial color="#d4d4d4" roughness={0.6} />
        </mesh>
        <mesh position={[0, -0.15, 0.91]}>
          <boxGeometry args={[2.8, 0.15, 0.02]} />
          <meshStandardMaterial color="#d4d4d4" roughness={0.6} />
        </mesh>
      </group>

      {/* Back Counter/Backsplash Wall */}
      <group position={[0, -1.2, -5]}>
        {/* Counter */}
        <RoundedBox args={[8, 0.12, 1.8]} radius={0.02} smoothness={4} position={[0, 0.5, 0]} castShadow>
          <meshStandardMaterial
            color="#2d2d2d"
            roughness={0.3}
            metalness={0.6}
          />
        </RoundedBox>

        {/* Lower cabinets */}
        <RoundedBox args={[7.8, 0.9, 1.6]} radius={0.05} smoothness={4} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.5}
            metalness={0.1}
          />
        </RoundedBox>

        {/* Backsplash */}
        <mesh position={[0, 1.5, -0.85]}>
          <boxGeometry args={[8, 2, 0.1]} />
          <meshStandardMaterial
            color="#e8e8e8"
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>

        {/* Upper cabinets */}
        <RoundedBox args={[6, 1.2, 1]} radius={0.05} smoothness={4} position={[0, 2.8, -0.3]} castShadow>
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.5}
            metalness={0.1}
          />
        </RoundedBox>
      </group>

      {/* Side Counter (left) */}
      <group position={[-5, -1.2, -2]}>
        <RoundedBox args={[1.5, 0.12, 3]} radius={0.02} smoothness={4} position={[0, 0.5, 0]} castShadow>
          <meshStandardMaterial
            color="#2d2d2d"
            roughness={0.3}
            metalness={0.6}
          />
        </RoundedBox>
        <RoundedBox args={[1.3, 0.9, 2.8]} radius={0.05} smoothness={4} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.5}
            metalness={0.1}
          />
        </RoundedBox>
      </group>

      {/* ENHANCED DECORATIVE ELEMENTS */}

      {/* Pendant light fixtures - more detailed */}
      <group position={[-1, 1.5, 0]}>
        {/* Glass shade */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.18, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshPhysicalMaterial
            color="#ffd700"
            roughness={0.1}
            metalness={0.9}
            transmission={0.3}
            thickness={0.5}
            emissive="#ffeb9a"
            emissiveIntensity={0.5}
          />
        </mesh>
        {/* Brass top */}
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
          <meshStandardMaterial color="#b8860b" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Cord */}
        <mesh position={[0, 0.9, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 1.7, 8]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        {/* Glowing bulb inside */}
        <mesh position={[0, -0.05, 0]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color="#ffffcc" />
        </mesh>
      </group>

      <group position={[1, 1.5, 0]}>
        {/* Glass shade */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.18, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshPhysicalMaterial
            color="#ffd700"
            roughness={0.1}
            metalness={0.9}
            transmission={0.3}
            thickness={0.5}
            emissive="#ffeb9a"
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
          <meshStandardMaterial color="#b8860b" roughness={0.2} metalness={0.9} />
        </mesh>
        <mesh position={[0, 0.9, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 1.7, 8]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0, -0.05, 0]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color="#ffffcc" />
        </mesh>
      </group>

      {/* ISLAND DETAILS */}
      {/* Fruit bowl - more detailed */}
      <group position={[0, -0.5, 0.4]}>
        <mesh>
          <sphereGeometry args={[0.35, 20, 20, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshPhysicalMaterial
            color="#e8e8e8"
            roughness={0.2}
            metalness={0.8}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>
        {/* Oranges */}
        <mesh position={[0.12, 0.18, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#ff8c00" roughness={0.5} />
        </mesh>
        <mesh position={[-0.08, 0.18, 0.08]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#ff8c00" roughness={0.5} />
        </mesh>
        {/* Red apple */}
        <mesh position={[-0.1, 0.2, -0.05]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#c41e3a" roughness={0.4} />
        </mesh>
        {/* Green apple */}
        <mesh position={[0.05, 0.25, 0.1]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#8db600" roughness={0.4} />
        </mesh>
        {/* Banana */}
        <mesh position={[0, 0.22, -0.12]} rotation={[0, 0, Math.PI / 6]}>
          <capsuleGeometry args={[0.03, 0.15, 8, 12]} />
          <meshStandardMaterial color="#ffe135" roughness={0.6} />
        </mesh>
      </group>

      {/* Cutting board with knife */}
      <group position={[-0.8, -0.58, -0.2]}>
        {/* Cutting board */}
        <RoundedBox args={[0.35, 0.02, 0.25]} radius={0.01} smoothness={4}>
          <meshStandardMaterial color="#8b4513" roughness={0.7} />
        </RoundedBox>
        {/* Knife */}
        <group position={[0.05, 0.02, 0]} rotation={[0, Math.PI / 4, 0]}>
          {/* Blade */}
          <mesh position={[0, 0, -0.08]}>
            <boxGeometry args={[0.02, 0.01, 0.12]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
          </mesh>
          {/* Handle */}
          <mesh position={[0, 0, 0.02]}>
            <boxGeometry args={[0.025, 0.015, 0.08]} />
            <meshStandardMaterial color="#2d2d2d" roughness={0.5} />
          </mesh>
        </group>
      </group>

      {/* Cookbook stack */}
      <group position={[1.2, -0.6, 0.2]}>
        <RoundedBox args={[0.15, 0.03, 0.2]} radius={0.005} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial color="#8b0000" roughness={0.6} />
        </RoundedBox>
        <RoundedBox args={[0.15, 0.03, 0.2]} radius={0.005} smoothness={4} position={[0, 0.03, 0]}>
          <meshStandardMaterial color="#2f4f4f" roughness={0.6} />
        </RoundedBox>
        <RoundedBox args={[0.14, 0.025, 0.19]} radius={0.005} smoothness={4} position={[0, 0.06, 0]}>
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </RoundedBox>
      </group>

      {/* Salt and pepper shakers */}
      <group position={[0.6, -0.55, 0.3]}>
        {/* Salt */}
        <Cylinder args={[0.03, 0.03, 0.08, 16]} position={[0, 0, 0]}>
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.1}
            transmission={0.9}
            thickness={0.5}
          />
        </Cylinder>
        {/* Pepper */}
        <Cylinder args={[0.03, 0.03, 0.08, 16]} position={[0.08, 0, 0]}>
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.1}
            transmission={0.9}
            thickness={0.5}
          />
        </Cylinder>
      </group>

      {/* BACK COUNTER APPLIANCES */}
      {/* Espresso machine - detailed */}
      <group position={[-2.8, -0.5, -4.8]}>
        {/* Main body */}
        <RoundedBox args={[0.4, 0.5, 0.35]} radius={0.04} smoothness={4}>
          <meshStandardMaterial color="#2d2d2d" roughness={0.3} metalness={0.7} />
        </RoundedBox>
        {/* Water tank (clear) */}
        <mesh position={[-0.15, 0.1, 0]}>
          <boxGeometry args={[0.08, 0.3, 0.25]} />
          <meshPhysicalMaterial
            color="#e8f4f8"
            roughness={0.1}
            transmission={0.95}
            thickness={0.5}
          />
        </mesh>
        {/* Group head */}
        <Cylinder args={[0.06, 0.08, 0.12, 16]} position={[0.12, 0.05, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#4a4a4a" roughness={0.2} metalness={0.8} />
        </Cylinder>
        {/* Cup */}
        <mesh position={[0.12, -0.28, 0.1]}>
          <cylinderGeometry args={[0.05, 0.04, 0.08, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.4} />
        </mesh>
        {/* Status LED */}
        <mesh position={[0.1, 0.22, 0]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshBasicMaterial color="#00ff00" />
        </mesh>
        {/* Steam (animated) */}
        <group ref={steamRef} position={[0.12, 0, 0.1]}>
          <Sphere args={[0.02, 8, 8]} position={[0, 0.02, 0]}>
            <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
          </Sphere>
          <Sphere args={[0.025, 8, 8]} position={[0.01, 0.06, 0]}>
            <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
          </Sphere>
          <Sphere args={[0.02, 8, 8]} position={[-0.01, 0.1, 0]}>
            <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
          </Sphere>
        </group>
      </group>

      {/* Toaster */}
      <group position={[-1.5, -0.55, -4.8]}>
        <RoundedBox args={[0.25, 0.15, 0.2]} radius={0.02} smoothness={4}>
          <meshStandardMaterial color="#c0c0c0" roughness={0.3} metalness={0.8} />
        </RoundedBox>
        {/* Slots */}
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.18, 0.01, 0.15]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        {/* Lever */}
        <mesh position={[0.1, -0.05, 0.08]}>
          <boxGeometry args={[0.015, 0.06, 0.015]} />
          <meshStandardMaterial color="#4a4a4a" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>

      {/* Knife block */}
      <group position={[-0.5, -0.5, -4.8]}>
        <RoundedBox args={[0.15, 0.2, 0.1]} radius={0.01} smoothness={4}>
          <meshStandardMaterial color="#3d2817" roughness={0.7} />
        </RoundedBox>
        {/* Knife handles sticking out */}
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} position={[0, 0.08 - i * 0.05, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <cylinderGeometry args={[0.01, 0.01, 0.06, 8]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
        ))}
      </group>

      {/* Utensil holder with utensils */}
      <group position={[2, -0.55, -4.8]}>
        {/* Holder */}
        <Cylinder args={[0.08, 0.08, 0.15, 16]}>
          <meshStandardMaterial color="#e8e8e8" roughness={0.4} />
        </Cylinder>
        {/* Wooden spoon */}
        <group position={[-0.03, 0.15, 0]} rotation={[0, 0, -0.2]}>
          <Cylinder args={[0.008, 0.008, 0.2, 8]}>
            <meshStandardMaterial color="#8b4513" roughness={0.6} />
          </Cylinder>
          <Sphere args={[0.02, 12, 12]} position={[0, 0.12, 0]}>
            <meshStandardMaterial color="#8b4513" roughness={0.6} />
          </Sphere>
        </group>
        {/* Spatula */}
        <group position={[0.03, 0.15, 0]} rotation={[0, 0, 0.2]}>
          <Cylinder args={[0.008, 0.008, 0.18, 8]}>
            <meshStandardMaterial color="#2d2d2d" roughness={0.5} />
          </Cylinder>
          <mesh position={[0, 0.12, 0]}>
            <boxGeometry args={[0.04, 0.08, 0.01]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.3} metalness={0.8} />
          </mesh>
        </group>
      </group>

      {/* SIDE COUNTER DETAILS */}
      {/* Potted plant - more detailed */}
      <group position={[-5, -0.5, -2]}>
        {/* Pot */}
        <Cylinder args={[0.18, 0.15, 0.25, 16]}>
          <meshStandardMaterial color="#8b6f47" roughness={0.8} />
        </Cylinder>
        {/* Soil */}
        <Cylinder args={[0.17, 0.17, 0.02, 16]} position={[0, 0.13, 0]}>
          <meshStandardMaterial color="#3d2817" roughness={0.9} />
        </Cylinder>
        {/* Multiple leaves */}
        <Sphere args={[0.15, 8, 8]} position={[0, 0.35, 0]}>
          <meshStandardMaterial color="#2d5016" roughness={0.6} />
        </Sphere>
        <Sphere args={[0.12, 8, 8]} position={[-0.1, 0.3, 0.1]}>
          <meshStandardMaterial color="#3d6b1f" roughness={0.6} />
        </Sphere>
        <Sphere args={[0.12, 8, 8]} position={[0.1, 0.32, -0.05]}>
          <meshStandardMaterial color="#3d6b1f" roughness={0.6} />
        </Sphere>
      </group>

      {/* Paper towel holder */}
      <group position={[-5, -0.55, -3.2]}>
        <Cylinder args={[0.015, 0.015, 0.3, 8]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#c0c0c0" roughness={0.3} metalness={0.8} />
        </Cylinder>
        <Cylinder args={[0.06, 0.06, 0.25, 16]} rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ffffff" roughness={0.7} />
        </Cylinder>
      </group>

      {/* Wall clock */}
      <group position={[0, 1.2, -5.95]}>
        <Cylinder args={[0.25, 0.25, 0.05, 32]}>
          <meshStandardMaterial color="#ffffff" roughness={0.3} />
        </Cylinder>
        {/* Clock face */}
        <mesh position={[0, 0, 0.03]}>
          <circleGeometry args={[0.22, 32]} />
          <meshStandardMaterial color="#f8f8f8" roughness={0.2} />
        </mesh>
        {/* Hour hand */}
        <mesh position={[0, 0.05, 0.04]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.01, 0.12, 0.01]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        {/* Minute hand */}
        <mesh position={[0, 0.08, 0.04]} rotation={[0, 0, Math.PI / 3]}>
          <boxGeometry args={[0.008, 0.16, 0.01]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        {/* Center dot */}
        <Sphere args={[0.02, 12, 12]} position={[0, 0, 0.045]}>
          <meshStandardMaterial color="#d4af37" roughness={0.2} metalness={0.8} />
        </Sphere>
      </group>
    </group>
  )
}

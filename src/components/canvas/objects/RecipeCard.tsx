import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, RoundedBox, MeshTransmissionMaterial } from '@react-three/drei'
import { Mesh, Vector3 } from 'three'
import { useSpring, animated, config } from '@react-spring/three'
import { useHover3D } from '@/hooks/useHover3D'
import { Recipe } from '@/types/recipe'
import { gentleSpring, snappySpring } from '@/lib/animations/springs'

interface RecipeCardProps {
  recipe: Recipe
  position: [number, number, number]
  onClick?: (recipe: Recipe) => void
  floatOffset?: number // Offset for staggered floating animation
}

/**
 * 3D Recipe Card Component
 *
 * Features:
 * - Hover animations (tilt, scale, glow)
 * - Subtle floating animation
 * - Click interaction
 * - Category-based color coding
 */
export function RecipeCard({ recipe, position, onClick, floatOffset = 0 }: RecipeCardProps) {
  const meshRef = useRef<Mesh>(null)

  const { hovered, bind } = useHover3D()

  // Spring animation for hover state
  const { scale, rotationX, rotationY, emissiveIntensity } = useSpring({
    scale: hovered ? 1.08 : 1,
    rotationX: hovered ? 0.1 : 0,
    rotationY: hovered ? 0.05 : 0,
    emissiveIntensity: hovered ? 0.3 : 0.1,
    config: gentleSpring,
  })

  // Subtle floating animation
  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime + floatOffset
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.08

    // Very subtle rotation when not hovered
    if (!hovered) {
      meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.02
    }
  })

  // Get color based on category
  const getCardColor = (category: Recipe['category']) => {
    switch (category) {
      case 'breakfast':
        return '#ffd700' // Gold
      case 'lunch':
        return '#87ceeb' // Sky blue
      case 'dinner':
        return '#ff6b6b' // Coral red
      case 'dessert':
        return '#ff69b4' // Hot pink
      case 'snack':
        return '#98fb98' // Pale green
      case 'beverage':
        return '#dda0dd' // Plum
      default:
        return '#ffffff'
    }
  }

  const cardColor = getCardColor(recipe.category)

  const handleClick = () => {
    if (onClick) {
      onClick(recipe)
    }
  }

  // Difficulty indicator size
  const getDifficultyStars = (difficulty: Recipe['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return '★'
      case 'medium':
        return '★★'
      case 'hard':
        return '★★★'
      default:
        return '★'
    }
  }

  return (
    <animated.group
      position={position}
      scale={scale}
      rotation-x={rotationX}
      rotation-y={rotationY}
      onClick={handleClick}
      {...bind}
    >
      {/* Main card body */}
      <RoundedBox
        ref={meshRef}
        args={[2.2, 3, 0.15]}
        radius={0.12}
        smoothness={4}
      >
        <animated.meshStandardMaterial
          color={cardColor}
          metalness={0.3}
          roughness={0.4}
          emissive={cardColor}
          emissiveIntensity={emissiveIntensity}
        />
      </RoundedBox>

      {/* Recipe Title */}
      <Text
        position={[0, 0.9, 0.08]}
        fontSize={0.18}
        color="#1a1a2e"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {recipe.title}
      </Text>

      {/* Cuisine & Category */}
      <Text
        position={[0, 0.6, 0.08]}
        fontSize={0.12}
        color="#333"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {recipe.cuisine.toUpperCase()} • {recipe.category.toUpperCase()}
      </Text>

      {/* Difficulty Stars */}
      <Text
        position={[0, 0.35, 0.08]}
        fontSize={0.14}
        color="#ffd700"
        anchorX="center"
        anchorY="middle"
      >
        {getDifficultyStars(recipe.difficulty)}
      </Text>

      {/* Time Info */}
      <Text
        position={[0, -0.5, 0.08]}
        fontSize={0.11}
        color="#555"
        anchorX="center"
        anchorY="middle"
      >
        ⏱ {recipe.prepTime + recipe.cookTime} min
      </Text>

      {/* Servings */}
      <Text
        position={[0, -0.7, 0.08]}
        fontSize={0.11}
        color="#555"
        anchorX="center"
        anchorY="middle"
      >
        🍽 {recipe.servings} servings
      </Text>

      {/* Tags preview */}
      <Text
        position={[0, -1.0, 0.08]}
        fontSize={0.09}
        color="#666"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {recipe.tags.slice(0, 2).join(' • ')}
      </Text>

      {/* Favorite indicator */}
      {recipe.isFavorite && (
        <Text
          position={[0.9, 1.3, 0.08]}
          fontSize={0.2}
          color="#ff3366"
          anchorX="center"
          anchorY="middle"
        >
          ♥
        </Text>
      )}

      {/* Glow effect on hover */}
      {hovered && (
        <pointLight
          position={[0, 0, 0.5]}
          intensity={0.8}
          distance={3}
          color={cardColor}
        />
      )}
    </animated.group>
  )
}

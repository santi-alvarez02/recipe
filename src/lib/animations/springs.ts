/**
 * React Spring animation presets for consistent animations
 * Based on jesse-zhou.com's smooth, physics-based feel
 */

import { SpringConfig } from '@react-spring/three'

/**
 * Gentle, smooth animation for subtle movements
 * Use for: Hover effects, gentle floating
 */
export const gentleSpring: SpringConfig = {
  tension: 280,
  friction: 60,
  mass: 1,
}

/**
 * Snappy, responsive animation
 * Use for: Button clicks, card selection
 */
export const snappySpring: SpringConfig = {
  tension: 400,
  friction: 30,
  mass: 0.8,
}

/**
 * Bouncy, playful animation
 * Use for: Entrance animations, success states
 */
export const bouncySpring: SpringConfig = {
  tension: 300,
  friction: 20,
  mass: 1.2,
}

/**
 * Slow, smooth animation
 * Use for: Camera movements, scene transitions
 */
export const slowSpring: SpringConfig = {
  tension: 120,
  friction: 40,
  mass: 1.5,
}

/**
 * Elastic, rubber-band-like animation
 * Use for: Playful interactions, drag releases
 */
export const elasticSpring: SpringConfig = {
  tension: 200,
  friction: 15,
  mass: 1,
}

/**
 * Stiff, immediate animation (minimal spring)
 * Use for: Precise movements, UI feedback
 */
export const stiffSpring: SpringConfig = {
  tension: 500,
  friction: 40,
  mass: 0.5,
}

/**
 * Wobbly, jelly-like animation
 * Use for: Fun effects, blob shapes
 */
export const wobblySpring: SpringConfig = {
  tension: 180,
  friction: 12,
  mass: 1,
}

/**
 * Default spring config (balanced)
 */
export const defaultSpring: SpringConfig = gentleSpring

/**
 * Duration-based config converter
 * For when you need a specific duration (approximate)
 */
export function durationToSpring(durationMs: number): SpringConfig {
  // Rough approximation: tension = 1000 / (duration in seconds)
  const seconds = durationMs / 1000
  return {
    tension: 1000 / seconds,
    friction: 40,
    mass: 1,
  }
}

/**
 * Preset durations (in ms)
 */
export const durations = {
  instant: 100,
  fast: 200,
  normal: 400,
  slow: 600,
  verySlow: 1000,
}

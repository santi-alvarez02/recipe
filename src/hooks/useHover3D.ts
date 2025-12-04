import { useState, useCallback } from 'react'

/**
 * Hook for managing 3D hover states with enter/leave callbacks
 * Returns hover state and event handlers for R3F components
 */

interface UseHover3DOptions {
  onHoverStart?: () => void
  onHoverEnd?: () => void
}

export function useHover3D(options: UseHover3DOptions = {}) {
  const [hovered, setHovered] = useState(false)

  const onPointerEnter = useCallback(() => {
    setHovered(true)
    options.onHoverStart?.()
    // Change cursor to pointer
    document.body.style.cursor = 'pointer'
  }, [options])

  const onPointerLeave = useCallback(() => {
    setHovered(false)
    options.onHoverEnd?.()
    // Reset cursor
    document.body.style.cursor = 'default'
  }, [options])

  return {
    hovered,
    onPointerEnter,
    onPointerLeave,
    bind: {
      onPointerEnter,
      onPointerLeave,
    },
  }
}

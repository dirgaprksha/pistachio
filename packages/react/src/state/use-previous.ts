import { useRef, useEffect } from 'react'

/**
 * React hook to track previous value of a state or prop.
 * @param value - Current value to track.
 * @returns Previous value.
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

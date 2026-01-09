import { useState, useCallback } from 'react'
import { clamp } from '@pistachiojs/core'

export type UseCounterOptions = {
  min?: number
  max?: number
}

export type UseCounterHandler = {
  increment: () => void
  decrement: () => void
  set: (value: number) => void
  reset: () => void
}

export type UseCounterReturn = [number, UseCounterHandler]

/**
 * React hook to manage counter state with optional min and max bounds.
 * @param initialValue - Number value for initial.
 * @param options - Configuration object.
 * @returns Tuple containing current count and handler object.
 */
export function useCounter(initialValue: number = 0, options: UseCounterOptions = {}): UseCounterReturn {
  const { min = -Infinity, max = Infinity } = options
  const [count, setCount] = useState(clamp(initialValue, min, max))

  const increment = useCallback(() => {
    setCount((current) => clamp(current + 1, min, max))
  }, [min, max])

  const decrement = useCallback(() => {
    setCount((current) => clamp(current - 1, min, max))
  }, [min, max])

  const set = useCallback(
    (value: number) => {
      setCount(clamp(value, min, max))
    },
    [min, max],
  )

  const reset = useCallback(() => {
    setCount(clamp(initialValue, min, max))
  }, [initialValue, min, max])

  return [count, { increment, decrement, set, reset }]
}

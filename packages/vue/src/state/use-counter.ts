import { ref } from 'vue'
import { clamp } from '@pistachiojs/core'
import type { Ref } from 'vue'

export interface UseCounterOptions {
  min?: number
  max?: number
}

export interface UseCounterReturn {
  count: Ref<number>
  increment: () => void
  decrement: () => void
  set: (value: number) => void
  reset: () => void
}

/**
 * Vue composable to manage counter state with optional min and max bounds.
 * @param initialValue - Number value for initial.
 * @param options - Configuration object.
 * @returns Object containing reactive count and handler methods.
 */
export function useCounter(initialValue: number = 0, options: UseCounterOptions = {}): UseCounterReturn {
  const { min = -Infinity, max = Infinity } = options
  const count = ref(clamp(initialValue, min, max))

  const increment = () => {
    count.value = clamp(count.value + 1, min, max)
  }

  const decrement = () => {
    count.value = clamp(count.value - 1, min, max)
  }

  const set = (value: number) => {
    count.value = clamp(value, min, max)
  }

  const reset = () => {
    count.value = clamp(initialValue, min, max)
  }

  return {
    count,
    increment,
    decrement,
    set,
    reset,
  }
}

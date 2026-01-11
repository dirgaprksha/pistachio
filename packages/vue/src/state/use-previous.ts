import { isRef, shallowRef, watch } from 'vue'
import type { Ref, ShallowRef } from 'vue'

/**
 * Vue composable to track previous value of a state or prop.
 * @param value - Value to track.
 * @returns Previous value.
 */
export function usePrevious<T>(value: Ref<T> | T): ShallowRef<T | undefined> {
  const previous = shallowRef<T | undefined>(undefined)
  let currentValue = isRef(value) ? value.value : value

  watch(
    isRef(value) ? value : () => value,
    (newValue) => {
      previous.value = currentValue
      currentValue = newValue
    },
    { flush: 'sync' },
  )

  return previous
}

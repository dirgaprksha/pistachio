/**
 * Sorts an array using an compare function.
 * @param value - Array value to sort.
 * @param compareFn - Function that defines sort order.
 * @returns Array value sorted.
 */
export function sort<T>(value: readonly T[], compareFn?: (valueA: T, valueB: T) => number): T[] {
  return [...value].sort(compareFn)
}

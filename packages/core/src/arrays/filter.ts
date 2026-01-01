/**
 * Filters an array based on a predicate function.
 * @param value - Array value to filter.
 * @param predicateFn - Function that tests each element.
 * @returns Array value containing only elements that pass test.
 */
export function filter<T>(
  value: readonly T[],
  predicateFn: (item: T, index: number, array: readonly T[]) => boolean,
): T[] {
  return value.filter(predicateFn)
}

/**
 * Excludes values from other array.
 * @param valueA - Array value to compare.
 * @param valueB - Array value to compare.
 * @param compareFn - Function to determine equality between elements.
 * @param options - Configuration object.
 * @returns Array value containing difference based on specified mode.
 */
export function difference<T>(
  valueA: readonly T[],
  valueB: readonly T[],
  compareFn?: (valueA: T, valueB: T) => boolean,
  options?: { symmetric?: boolean },
): T[] {
  const { symmetric = false } = options ?? {}

  if (valueA.length === 0 && valueB.length === 0) return []
  if (valueA.length === 0) return symmetric ? [...valueB] : []
  if (valueB.length === 0) return [...valueA]

  if (!compareFn) {
    const setB = new Set(valueB)
    const differenceA = valueA.filter((item) => !setB.has(item))

    if (symmetric) {
      const setA = new Set(valueA)
      const differenceB = valueB.filter((item) => !setA.has(item))

      return [...differenceA, ...differenceB]
    }

    return differenceA
  }

  const differenceA = valueA.filter((itemA) => !valueB.some((itemB) => compareFn(itemA, itemB)))
  if (symmetric) {
    const differenceB = valueB.filter((itemB) => !valueA.some((itemA) => compareFn(itemB, itemA)))

    return [...differenceA, ...differenceB]
  }

  return differenceA
}

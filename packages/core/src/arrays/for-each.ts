/**
 * Executes a provided function once for each array element.
 * @param value - Array value to iterate over.
 * @param callbackFn - Function to execute for each element.
 */
export function forEach<T>(
  value: readonly T[],
  callbackFn: (item: T, index: number, array: readonly T[]) => void,
): void {
  value.forEach(callbackFn)
}

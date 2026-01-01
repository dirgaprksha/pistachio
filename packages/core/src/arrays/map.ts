/**
 * Creates a new array populated with results of calling a provided function on every element.
 * @param value - Array value to map over.
 * @param callbackFn - Function that produces an element of new array.
 * @returns New array value with each element being result of callback function.
 */
export function map<T, U>(value: readonly T[], callbackFn: (item: T, index: number, array: readonly T[]) => U): U[] {
  return value.map(callbackFn)
}

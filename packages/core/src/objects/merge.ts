/**
 * Merges two objects into a new object.
 * @param valueA - Object value to merge.
 * @param valueB - Object value to merge.
 * @returns New object value with properties from both objects.
 */
export function merge<T extends object, U extends object>(valueA: T, valueB: U): T & U {
  return { ...valueA, ...valueB }
}

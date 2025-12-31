/**
 * Joins all elements of an array into a string.
 * @param value - Array value to join.
 * @param separator - String to separate each pair of adjacent elements.
 * @returns String value with all array elements joined.
 */
export function join<T>(value: readonly T[], separator?: string): string {
  return value.join(separator)
}

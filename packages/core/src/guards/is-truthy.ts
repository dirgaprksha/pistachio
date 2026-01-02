/**
 * Checks if a value is truthy.
 * @param value - Value to check.
 * @returns True if value is truthy, false otherwise.
 */
export function isTruthy<T>(value: T): value is NonNullable<T> {
  return Boolean(value)
}

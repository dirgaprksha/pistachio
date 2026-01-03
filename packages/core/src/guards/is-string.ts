/**
 * Checks if a value is a string.
 * @param value - Value to check.
 * @returns True if value is a string, false otherwise.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

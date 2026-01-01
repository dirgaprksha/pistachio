/**
 * Checks if a value is a boolean.
 * @param value - Value to check.
 * @returns True if value is a boolean, false otherwise.
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

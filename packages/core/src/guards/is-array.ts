/**
 * Checks if a value is an array.
 * @param value - Value to check.
 * @returns True if value is an array, false otherwise.
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

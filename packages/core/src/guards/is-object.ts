/**
 * Checks if a value is an object (excluding arrays and null).
 * @param value - Value to check.
 * @returns True if value is an object, false otherwise.
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

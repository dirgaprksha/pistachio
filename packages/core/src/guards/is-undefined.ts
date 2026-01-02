/**
 * Checks if a value is undefined.
 * @param value - Value to check.
 * @returns True if value is undefined, false otherwise.
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

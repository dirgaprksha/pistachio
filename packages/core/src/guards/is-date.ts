/**
 * Checks if a value is a date object.
 * @param value - Value to check.
 * @returns True if value is a date object, false otherwise.
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

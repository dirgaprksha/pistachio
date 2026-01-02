/**
 * Checks if a value is defined (not null or undefined).
 * @param value - Value to check.
 * @returns True if value is defined, false otherwise.
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

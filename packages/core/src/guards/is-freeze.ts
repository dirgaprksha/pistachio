/**
 * Checks if an object is frozen.
 * @param value - Value to check.
 * @returns True if value is a frozen object, false otherwise.
 */
export function isFreeze(value: unknown): boolean {
  return typeof value === 'object' && value !== null && Object.isFrozen(value)
}

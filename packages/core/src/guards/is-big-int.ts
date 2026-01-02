/**
 * Checks if a value is a bigint.
 * @param value - Value to check.
 * @returns True if value is a bigint, false otherwise.
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint'
}

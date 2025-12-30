/**
 * Converts a string to sentence case.
 * @param value - String value to sentence case.
 * @returns String value sentence case.
 */
export function toSentenceCase(value: string): string {
  if (value.length === 0) return value

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}

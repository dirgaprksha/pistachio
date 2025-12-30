/**
 * Converts a string to capitalize.
 * @param value - Value string to capitalize.
 * @returns Value string capitalize.
 */
export function toCapitalize(value: string): string {
  if (value.length === 0) return value

  return value.charAt(0).toUpperCase() + value.slice(1)
}

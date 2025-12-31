/**
 * Converts a string to title case.
 * @param value - String value to title case.
 * @returns String value title case.
 */
export function toTitleCase(value: string): string {
  if (value.length === 0) return value

  return value.toLowerCase().replace(/(?:^|\s|-|_)\w/g, (character) => character.toUpperCase())
}

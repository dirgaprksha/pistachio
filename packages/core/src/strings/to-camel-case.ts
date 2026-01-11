/**
 * Converts a string to camel case.
 * @param value - String value to camel case.
 * @returns String value camel case.
 */
export function toCamelCase(value: string): string {
  if (value.length === 0) return value

  return value
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, character) => (character ? character.toUpperCase() : ''))
}

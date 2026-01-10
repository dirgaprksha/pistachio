/**
 * Converts a string to pascal case.
 * @param value - String value to pascal case.
 * @returns String value pascal case.
 */
export function toPascalCase(value: string): string {
  if (value.length === 0) return value

  const separators = value.replace(/([a-z])([A-Z])/g, '$1-$2')

  return separators
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, character) => (character ? character.toUpperCase() : ''))
    .replace(/^[a-z]/, (character) => character.toUpperCase())
}

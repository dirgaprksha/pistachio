/**
 * Converts a string to snake case.
 * @param value - String value to snake case.
 * @returns String value snake case.
 */
export function toSnakeCase(value: string): string {
  if (value.length === 0) return value

  return value
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[-\s]+/g, '_')
    .toLowerCase()
}

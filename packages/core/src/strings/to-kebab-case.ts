/**
 * Converts a string to kebab case.
 * @param value - String value to kebab case.
 * @returns String value kebab case.
 */
export function toKebabCase(value: string): string {
  if (value.length === 0) return value

  return value
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

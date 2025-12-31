/**
 * Truncates a string to a specified length and adds an optional suffix.
 * @param value - String value to truncate.
 * @param length - Maximum length of string.
 * @param suffix - Suffix to append.
 * @returns String value truncated.
 */
export function truncate(value: string, length: number, suffix: string = '...'): string {
  if (value.length <= length) return value
  if (length - suffix.length <= 0) return suffix.slice(0, length)

  return value.slice(0, length - suffix.length) + suffix
}

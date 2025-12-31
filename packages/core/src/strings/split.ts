/**
 * Splits a string into an array of substrings using a separator pattern.
 * @param value - String value to split.
 * @param separator - Separator to split.
 * @param limit - Limit on number of splits.
 * @returns Array value of substrings.
 */
export function split(value: string, separator: string | RegExp, limit?: number): string[] {
  return value.split(separator, limit)
}

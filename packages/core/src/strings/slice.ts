/**
 * Extracts a section of a string between two indices.
 * @param value - String value to slice.
 * @param start - Start index extraction.
 * @param end - End index extraction.
 * @returns String value extracted.
 */
export function slice(value: string, start: number, end?: number): string {
  return value.slice(start, end)
}

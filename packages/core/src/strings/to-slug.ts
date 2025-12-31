/**
 * Converts a string to a URL-friendly slug.
 * @param value - String value to slug.
 * @returns String value slug.
 */
export function toSlug(value: string): string {
  if (value.length === 0) return value

  return value
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')
}

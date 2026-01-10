/**
 * Converts a string to a URL-friendly slug.
 * @param value - String value to slug.
 * @returns String value slug.
 */
export function toSlug(value: string): string {
  if (value.length === 0) return value

  return value
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d)/g, '$1-$2')
    .replace(/(\d)([a-zA-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')
}

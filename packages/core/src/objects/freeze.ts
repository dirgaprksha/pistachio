/**
 * Freezes an object making it immutable.
 * @param value - Object value to freeze.
 * @returns Object value frozened.
 */
export function freeze<T extends object>(value: T): Readonly<T> {
  return Object.freeze(value)
}

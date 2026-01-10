/**
 * Creates a new object with all keys except specified ones from source object.
 * @param value - Object value to omit from.
 * @param keys - Array of keys to omit.
 * @returns New object without omitted keys.
 */
export function omit<T extends object, K extends keyof T>(value: T, keys: K[]): Omit<T, K> {
  const result = { ...value } as Omit<T, K>
  const keysToOmit = new Set(keys)

  for (const key of keysToOmit) {
    delete (result as T)[key]
  }

  return result
}

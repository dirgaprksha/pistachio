/**
 * Creates a new object with all keys except specified ones from source object.
 * @param value - Object value to omit.
 * @param keys - Array keys to omit.
 * @returns New object without omitted keys.
 */
export function omit<T extends object, K extends keyof T>(value: T, keys: K[]): Omit<T, K> {
  const omited = { ...value } as Omit<T, K>
  const omitSet = new Set(keys)

  for (const key of omitSet) {
    delete (omited as T)[key]
  }

  return omited
}

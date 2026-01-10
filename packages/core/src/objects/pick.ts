/**
 * Creates a new object with only specified keys from source object.
 * @param value - Object value to pick from.
 * @param keys - Array of keys to pick.
 * @returns New object with only picked keys.
 */
export function pick<T extends object, K extends keyof T>(value: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>

  for (const key of keys) {
    if (key in value) {
      result[key] = value[key]
    }
  }

  return result
}

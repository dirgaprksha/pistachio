/**
 * Checks if a value is a symbol.
 * @param value - Value to check.
 * @returns True if value is a symbol, false otherwise.
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol'
}

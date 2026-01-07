/**
 * Clamps a number within inclusive min and max bounds.
 * @param value - Number value to clamp.
 * @param min - Minimum value bound.
 * @param max - Maximum value bound.
 * @returns Number value clamped.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

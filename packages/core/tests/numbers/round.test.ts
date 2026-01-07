import { describe, it, expect } from 'vitest'
import { round } from '../../src/numbers'

describe('round', () => {
  it('should round positive decimals to nearest integer', () => {
    expect(round(4.1)).toBe(4)
    expect(round(4.5)).toBe(5)
    expect(round(4.9)).toBe(5)
    expect(round(0.4)).toBe(0)
    expect(round(0.5)).toBe(1)
  })

  it('should handle integers', () => {
    expect(round(4.0)).toBe(4)
    expect(round(5)).toBe(5)
    expect(round(0)).toBe(0)
  })

  it('should round negative decimals to nearest integer', () => {
    expect(round(-4.1)).toBe(-4)
    expect(round(-4.5)).toBe(-4)
    expect(round(-4.9)).toBe(-5)
    expect(round(-0.4)).toBe(-0)
    expect(round(-0.5)).toBe(-0)
  })

  it('should handle negative integers', () => {
    expect(round(-5)).toBe(-5)
  })

  it('should handle special values', () => {
    expect(round(Infinity)).toBe(Infinity)
    expect(round(-Infinity)).toBe(-Infinity)
    expect(round(NaN)).toBe(NaN)
  })
})

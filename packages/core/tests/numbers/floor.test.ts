import { describe, it, expect } from 'vitest'
import { floor } from '../../src/numbers'

describe('floor', () => {
  it('should round positive decimals down', () => {
    expect(floor(4.1)).toBe(4)
    expect(floor(4.9)).toBe(4)
    expect(floor(0.1)).toBe(0)
    expect(floor(0.9)).toBe(0)
  })

  it('should handle integers', () => {
    expect(floor(4.0)).toBe(4)
    expect(floor(5)).toBe(5)
    expect(floor(0)).toBe(0)
  })

  it('should round negative decimals away from zero', () => {
    expect(floor(-4.1)).toBe(-5)
    expect(floor(-4.9)).toBe(-5)
    expect(floor(-0.1)).toBe(-1)
    expect(floor(-0.9)).toBe(-1)
  })

  it('should handle negative integers', () => {
    expect(floor(-5)).toBe(-5)
  })

  it('should handle special values', () => {
    expect(floor(Infinity)).toBe(Infinity)
    expect(floor(-Infinity)).toBe(-Infinity)
    expect(floor(NaN)).toBe(NaN)
  })
})

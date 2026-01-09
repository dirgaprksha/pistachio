import { describe, it, expect } from 'vitest'
import { ceil } from '../../src/numbers'

describe('ceil', () => {
  it('should round positive decimals up', () => {
    expect(ceil(4.1)).toBe(5)
    expect(ceil(4.9)).toBe(5)
    expect(ceil(0.1)).toBe(1)
    expect(ceil(0.9)).toBe(1)
  })

  it('should handle integers', () => {
    expect(ceil(4.0)).toBe(4)
    expect(ceil(5)).toBe(5)
    expect(ceil(0)).toBe(0)
  })

  it('should round negative decimals towards zero', () => {
    expect(ceil(-4.1)).toBe(-4)
    expect(ceil(-4.9)).toBe(-4)
    expect(ceil(-0.1)).toBe(-0)
    expect(ceil(-0.9)).toBe(-0)
  })

  it('should handle negative integers', () => {
    expect(ceil(-5)).toBe(-5)
  })

  it('should handle special values', () => {
    expect(ceil(Infinity)).toBe(Infinity)
    expect(ceil(-Infinity)).toBe(-Infinity)
    expect(ceil(NaN)).toBe(NaN)
  })
})

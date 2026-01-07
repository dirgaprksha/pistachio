import { describe, it, expect } from 'vitest'
import { add } from '../../src/numbers'

describe('add', () => {
  it('should add positive integers', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 10)).toBe(15)
    expect(add(100, 200)).toBe(300)
  })

  it('should handle zero', () => {
    expect(add(0, 0)).toBe(0)
    expect(add(0, -0)).toBe(0)
  })

  it('should add negative numbers', () => {
    expect(add(-5, 5)).toBe(0)
    expect(add(-10, -5)).toBe(-15)
    expect(add(10, -5)).toBe(5)
  })

  it('should add decimal numbers', () => {
    expect(add(1.5, 2.5)).toBe(4)
    expect(add(0.1, 0.2)).toBeCloseTo(0.3)
    expect(add(-3.5, 1.5)).toBe(-2)
  })

  it('should handle infinity', () => {
    expect(add(Infinity, 1)).toBe(Infinity)
    expect(add(-Infinity, 1)).toBe(-Infinity)
    expect(add(Infinity, -Infinity)).toBe(NaN)
  })
})

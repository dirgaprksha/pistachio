import { describe, it, expect } from 'vitest'
import { divide } from '../../src/numbers'

describe('divide', () => {
  it('should divide positive integers', () => {
    expect(divide(10, 2)).toBe(5)
    expect(divide(15, 3)).toBe(5)
    expect(divide(10, 1)).toBe(10)
  })

  it('should handle zero dividend', () => {
    expect(divide(0, 5)).toBe(0)
  })

  it('should divide negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5)
    expect(divide(10, -2)).toBe(-5)
    expect(divide(-10, -2)).toBe(5)
  })

  it('should handle decimal results', () => {
    expect(divide(7, 2)).toBe(3.5)
    expect(divide(1, 3)).toBeCloseTo(0.333333)
  })

  it('should handle division by zero', () => {
    expect(divide(10, 0)).toBe(Infinity)
    expect(divide(-10, 0)).toBe(-Infinity)
    expect(divide(0, 0)).toBe(NaN)
  })

  it('should handle infinity', () => {
    expect(divide(Infinity, 2)).toBe(Infinity)
    expect(divide(Infinity, Infinity)).toBe(NaN)
    expect(divide(10, Infinity)).toBe(0)
  })
})

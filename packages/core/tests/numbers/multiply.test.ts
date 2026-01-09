import { describe, it, expect } from 'vitest'
import { multiply } from '../../src/numbers'

describe('multiply', () => {
  it('should multiply positive integers', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(5, 10)).toBe(50)
    expect(multiply(100, 2)).toBe(200)
  })

  it('should handle zero', () => {
    expect(multiply(0, 0)).toBe(0)
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(5, 0)).toBe(0)
  })

  it('should multiply negative numbers', () => {
    expect(multiply(-5, 5)).toBe(-25)
    expect(multiply(-10, -5)).toBe(50)
    expect(multiply(10, -5)).toBe(-50)
  })

  it('should multiply decimal numbers', () => {
    expect(multiply(2.5, 2)).toBe(5)
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02)
    expect(multiply(-3.5, 2)).toBe(-7)
  })

  it('should handle infinity', () => {
    expect(multiply(Infinity, 2)).toBe(Infinity)
    expect(multiply(-Infinity, 2)).toBe(-Infinity)
    expect(multiply(Infinity, 0)).toBe(NaN)
  })

  it('should handle multiplication by one', () => {
    expect(multiply(5, 1)).toBe(5)
    expect(multiply(1, 5)).toBe(5)
    expect(multiply(-5, 1)).toBe(-5)
  })
})

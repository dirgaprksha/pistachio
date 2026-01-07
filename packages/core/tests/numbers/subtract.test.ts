import { describe, it, expect } from 'vitest'
import { subtract } from '../../src/numbers'

describe('subtract', () => {
  it('should subtract positive integers', () => {
    expect(subtract(5, 2)).toBe(3)
    expect(subtract(10, 5)).toBe(5)
    expect(subtract(300, 100)).toBe(200)
  })

  it('should handle zero', () => {
    expect(subtract(0, 0)).toBe(0)
    expect(subtract(0, -0)).toBe(0)
    expect(subtract(5, 0)).toBe(5)
  })

  it('should subtract negative numbers', () => {
    expect(subtract(-5, 5)).toBe(-10)
    expect(subtract(-10, -5)).toBe(-5)
    expect(subtract(10, -5)).toBe(15)
  })

  it('should subtract decimal numbers', () => {
    expect(subtract(4, 1.5)).toBe(2.5)
    expect(subtract(0.3, 0.1)).toBeCloseTo(0.2)
    expect(subtract(-3.5, 1.5)).toBe(-5)
  })

  it('should handle infinity', () => {
    expect(subtract(Infinity, 1)).toBe(Infinity)
    expect(subtract(-Infinity, 1)).toBe(-Infinity)
    expect(subtract(Infinity, Infinity)).toBe(NaN)
  })
})

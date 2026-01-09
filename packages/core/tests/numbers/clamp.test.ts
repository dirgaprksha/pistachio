import { describe, it, expect } from 'vitest'
import { clamp } from '../../src/numbers'

describe('clamp', () => {
  it('should return value when within range', () => {
    expect(clamp(5, 0, 10)).toBe(5)
    expect(clamp(3, 2, 5)).toBe(3)
    expect(clamp(0, -5, 5)).toBe(0)
  })

  it('should return bounds when at edges', () => {
    expect(clamp(0, 0, 10)).toBe(0)
    expect(clamp(10, 0, 10)).toBe(10)
  })

  it('should clamp to minimum when below range', () => {
    expect(clamp(-5, 0, 10)).toBe(0)
    expect(clamp(1, 2, 5)).toBe(2)
    expect(clamp(-10, -5, 5)).toBe(-5)
  })

  it('should clamp to maximum when above range', () => {
    expect(clamp(15, 0, 10)).toBe(10)
    expect(clamp(5, 1, 3)).toBe(3)
    expect(clamp(7, 2, 5)).toBe(5)
    expect(clamp(10, -5, 5)).toBe(5)
  })

  it('should handle decimal numbers', () => {
    expect(clamp(2.5, 0, 10)).toBe(2.5)
    expect(clamp(0.5, 1, 10)).toBe(1)
    expect(clamp(10.5, 1, 10)).toBe(10)
  })

  it('should handle equal min and max', () => {
    expect(clamp(5, 5, 5)).toBe(5)
    expect(clamp(3, 5, 5)).toBe(5)
    expect(clamp(7, 5, 5)).toBe(5)
  })
})

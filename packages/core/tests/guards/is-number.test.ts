import { describe, it, expect } from 'vitest'
import { isNumber } from '../../src/guards'

describe('isNumber', () => {
  it('should return true for integers', () => {
    expect(isNumber(0)).toBe(true)
    expect(isNumber(123)).toBe(true)
    expect(isNumber(-123)).toBe(true)
  })

  it('should return true for decimals', () => {
    expect(isNumber(3.14)).toBe(true)
    expect(isNumber(-3.14)).toBe(true)
  })

  it('should return true for infinity', () => {
    expect(isNumber(Infinity)).toBe(true)
    expect(isNumber(-Infinity)).toBe(true)
  })

  it('should return true for number limits', () => {
    expect(isNumber(Number.MAX_VALUE)).toBe(true)
    expect(isNumber(Number.MIN_VALUE)).toBe(true)
  })

  it('should return false for NaN', () => {
    expect(isNumber(NaN)).toBe(false)
  })

  it('should return false for strings', () => {
    expect(isNumber('123')).toBe(false)
    expect(isNumber('0')).toBe(false)
    expect(isNumber('')).toBe(false)
    expect(isNumber('hello')).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isNumber(true)).toBe(false)
    expect(isNumber(false)).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
  })

  it('should return false for arrays', () => {
    expect(isNumber([])).toBe(false)
    expect(isNumber([123])).toBe(false)
  })

  it('should return false for objects', () => {
    expect(isNumber({})).toBe(false)
    expect(isNumber({ value: 123 })).toBe(false)
  })

  it('should return false for Number objects', () => {
    expect(isNumber(new Number(123))).toBe(false)
  })
})

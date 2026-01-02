import { describe, it, expect } from 'vitest'
import { isArray } from '../../src/guards'

describe('isArray', () => {
  it('should return true for arrays', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray(['hello', 'world'])).toBe(true)
    expect(isArray([1, 'hello', true])).toBe(true)
    expect(isArray(new Array(5))).toBe(true)
  })

  it('should return false for strings', () => {
    expect(isArray('hello')).toBe(false)
    expect(isArray('')).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isArray(123)).toBe(false)
    expect(isArray(0)).toBe(false)
    expect(isArray(NaN)).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isArray(true)).toBe(false)
    expect(isArray(false)).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
  })

  it('should return false for objects', () => {
    expect(isArray({})).toBe(false)
    expect(isArray({ foo: 'bar' })).toBe(false)
  })

  it('should return false for array-like objects', () => {
    expect(isArray({ length: 0 })).toBe(false)
  })
})

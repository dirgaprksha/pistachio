import { describe, it, expect } from 'vitest'
import { isUndefined } from '../../src/guards'

describe('isUndefined', () => {
  it('should return true for undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined(void 0)).toBe(true)
  })

  it('should return false for strings', () => {
    expect(isUndefined('hello')).toBe(false)
    expect(isUndefined('')).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isUndefined(0)).toBe(false)
    expect(isUndefined(123)).toBe(false)
    expect(isUndefined(NaN)).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isUndefined(false)).toBe(false)
    expect(isUndefined(true)).toBe(false)
  })

  it('should return false for arrays', () => {
    expect(isUndefined([])).toBe(false)
    expect(isUndefined([1, 2, 3])).toBe(false)
  })

  it('should return false for objects', () => {
    expect(isUndefined({})).toBe(false)
    expect(isUndefined({ foo: 'bar' })).toBe(false)
  })

  it('should return false for null', () => {
    expect(isUndefined(null)).toBe(false)
  })
})

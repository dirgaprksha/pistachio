import { describe, it, expect } from 'vitest'
import { isString } from '../../src/guards'

describe('isString', () => {
  it('should return true for string values', () => {
    expect(isString('hello')).toBe(true)
    expect(isString('hello world')).toBe(true)
    expect(isString('')).toBe(true)
    expect(isString('123')).toBe(true)
  })

  it('should return false for numbers', () => {
    expect(isString(123)).toBe(false)
    expect(isString(0)).toBe(false)
    expect(isString(NaN)).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isString(true)).toBe(false)
    expect(isString(false)).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
  })

  it('should return false for arrays', () => {
    expect(isString([])).toBe(false)
    expect(isString(['hello'])).toBe(false)
  })

  it('should return false for objects', () => {
    expect(isString({})).toBe(false)
    expect(isString({ foo: 'bar' })).toBe(false)
  })

  it('should return false for String objects', () => {
    expect(isString(new String('hello'))).toBe(false)
  })
})

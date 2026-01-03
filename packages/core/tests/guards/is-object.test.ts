import { describe, it, expect } from 'vitest'
import { isObject } from '../../src/guards'

describe('isObject', () => {
  it('should return true for plain objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ foo: 'bar' })).toBe(true)
    expect(isObject({ a: 1, b: 2 })).toBe(true)
    expect(isObject(new Object())).toBe(true)
    expect(isObject(Object.create(null))).toBe(true)
  })

  it('should return true for Date and RegExp objects', () => {
    expect(isObject(new Date())).toBe(true)
    expect(isObject(new RegExp(''))).toBe(true)
  })

  it('should return false for arrays', () => {
    expect(isObject([])).toBe(false)
    expect(isObject([1, 2, 3])).toBe(false)
  })

  it('should return false for strings', () => {
    expect(isObject('hello')).toBe(false)
    expect(isObject('')).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isObject(123)).toBe(false)
    expect(isObject(0)).toBe(false)
    expect(isObject(NaN)).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isObject(true)).toBe(false)
    expect(isObject(false)).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
  })

  it('should return false for functions', () => {
    expect(isObject(() => {})).toBe(false)
  })
})

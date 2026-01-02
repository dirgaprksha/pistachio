import { describe, it, expect } from 'vitest'
import { isFunction } from '../../src/guards'

describe('isFunction', () => {
  it('should return true for arrow functions', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(async () => {})).toBe(true)
  })

  it('should return true for function declarations', () => {
    expect(isFunction(function () {})).toBe(true)
    expect(isFunction(async function () {})).toBe(true)
    expect(isFunction(function* () {})).toBe(true)
  })

  it('should return true for classes', () => {
    expect(isFunction(class {})).toBe(true)
  })

  it('should return true for built-in constructors', () => {
    expect(isFunction(Array)).toBe(true)
    expect(isFunction(Object)).toBe(true)
    expect(isFunction(String)).toBe(true)
    expect(isFunction(Number)).toBe(true)
    expect(isFunction(Boolean)).toBe(true)
    expect(isFunction(Date)).toBe(true)
    expect(isFunction(RegExp)).toBe(true)
    expect(isFunction(Promise)).toBe(true)
  })

  it('should return true for built-in methods', () => {
    expect(isFunction(Math.max)).toBe(true)
  })

  it('should return false for strings', () => {
    expect(isFunction('hello')).toBe(false)
    expect(isFunction('')).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isFunction(123)).toBe(false)
    expect(isFunction(0)).toBe(false)
    expect(isFunction(NaN)).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isFunction(true)).toBe(false)
    expect(isFunction(false)).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isFunction(null)).toBe(false)
    expect(isFunction(undefined)).toBe(false)
  })

  it('should return false for arrays and objects', () => {
    expect(isFunction([])).toBe(false)
    expect(isFunction({})).toBe(false)
  })

  it('should return false for class instances', () => {
    expect(isFunction(new Date())).toBe(false)
  })
})

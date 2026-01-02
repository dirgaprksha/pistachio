import { describe, it, expect } from 'vitest'
import { isBoolean } from '../../src/guards'

describe('isBoolean', () => {
  it('should return true for boolean literals', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })

  it('should return true for boolean expressions', () => {
    expect(isBoolean(Boolean(1))).toBe(true)
    expect(isBoolean(Boolean(0))).toBe(true)
    expect(isBoolean(!0)).toBe(true)
    expect(isBoolean(!1)).toBe(true)
  })

  it('should return false for numbers', () => {
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean(1)).toBe(false)
    expect(isBoolean(NaN)).toBe(false)
  })

  it('should return false for strings', () => {
    expect(isBoolean('true')).toBe(false)
    expect(isBoolean('false')).toBe(false)
    expect(isBoolean('')).toBe(false)
    expect(isBoolean('hello')).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(undefined)).toBe(false)
  })

  it('should return false for arrays and objects', () => {
    expect(isBoolean([])).toBe(false)
    expect(isBoolean({})).toBe(false)
  })

  it('should return false for Boolean objects', () => {
    expect(isBoolean(new Boolean(true))).toBe(false)
    expect(isBoolean(new Boolean(false))).toBe(false)
  })
})

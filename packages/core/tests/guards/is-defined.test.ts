import { describe, it, expect } from 'vitest'
import { isDefined } from '../../src/guards'

describe('isDefined', () => {
  it('should return true for strings', () => {
    expect(isDefined('hello')).toBe(true)
    expect(isDefined('')).toBe(true)
  })

  it('should return true for numbers', () => {
    expect(isDefined(0)).toBe(true)
    expect(isDefined(123)).toBe(true)
    expect(isDefined(NaN)).toBe(true)
  })

  it('should return true for booleans', () => {
    expect(isDefined(false)).toBe(true)
    expect(isDefined(true)).toBe(true)
  })

  it('should return true for arrays', () => {
    expect(isDefined([])).toBe(true)
    expect(isDefined([1, 2, 3])).toBe(true)
  })

  it('should return true for objects', () => {
    expect(isDefined({})).toBe(true)
    expect(isDefined({ foo: 'bar' })).toBe(true)
  })

  it('should return false for null and undefined', () => {
    expect(isDefined(null)).toBe(false)
    expect(isDefined(undefined)).toBe(false)
  })
})

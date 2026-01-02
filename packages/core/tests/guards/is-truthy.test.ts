import { describe, it, expect } from 'vitest'
import { isTruthy } from '../../src/guards'

describe('isTruthy', () => {
  it('should return true for boolean true', () => {
    expect(isTruthy(true)).toBe(true)
  })

  it('should return true for non-zero numbers', () => {
    expect(isTruthy(1)).toBe(true)
    expect(isTruthy(-1)).toBe(true)
    expect(isTruthy(Infinity)).toBe(true)
    expect(isTruthy(-Infinity)).toBe(true)
  })

  it('should return true for non-empty strings', () => {
    expect(isTruthy('hello')).toBe(true)
    expect(isTruthy('0')).toBe(true)
    expect(isTruthy('false')).toBe(true)
  })

  it('should return true for arrays', () => {
    expect(isTruthy([])).toBe(true)
    expect(isTruthy([1, 2, 3])).toBe(true)
  })

  it('should return true for objects', () => {
    expect(isTruthy({})).toBe(true)
    expect(isTruthy({ foo: 'bar' })).toBe(true)
    expect(isTruthy(new Date())).toBe(true)
  })

  it('should return true for functions', () => {
    expect(isTruthy(() => {})).toBe(true)
  })

  it('should return true for symbols', () => {
    expect(isTruthy(Symbol())).toBe(true)
    expect(isTruthy(Symbol('foo'))).toBe(true)
  })

  it('should return true for non-zero bigints', () => {
    expect(isTruthy(1n)).toBe(true)
    expect(isTruthy(-1n)).toBe(true)
  })

  it('should return false for boolean false', () => {
    expect(isTruthy(false)).toBe(false)
  })

  it('should return false for zero', () => {
    expect(isTruthy(0)).toBe(false)
    expect(isTruthy(0n)).toBe(false)
  })

  it('should return false for empty strings', () => {
    expect(isTruthy('')).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isTruthy(null)).toBe(false)
    expect(isTruthy(undefined)).toBe(false)
  })

  it('should return false for NaN', () => {
    expect(isTruthy(NaN)).toBe(false)
  })
})

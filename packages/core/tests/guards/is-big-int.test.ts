import { describe, it, expect } from 'vitest'
import { isBigInt } from '../../src/guards'

describe('isBigInt', () => {
  it('should return true for bigint literals', () => {
    expect(isBigInt(0n)).toBe(true)
    expect(isBigInt(123n)).toBe(true)
    expect(isBigInt(-123n)).toBe(true)
  })

  it('should return true for BigInt constructor values', () => {
    expect(isBigInt(BigInt(0))).toBe(true)
    expect(isBigInt(BigInt(123))).toBe(true)
    expect(isBigInt(BigInt(-123))).toBe(true)
    expect(isBigInt(BigInt('9007199254740991'))).toBe(true)
  })

  it('should return false for numbers', () => {
    expect(isBigInt(0)).toBe(false)
    expect(isBigInt(123)).toBe(false)
    expect(isBigInt(-123)).toBe(false)
    expect(isBigInt(NaN)).toBe(false)
    expect(isBigInt(Infinity)).toBe(false)
  })

  it('should return false for strings', () => {
    expect(isBigInt('123n')).toBe(false)
    expect(isBigInt('0')).toBe(false)
    expect(isBigInt('')).toBe(false)
    expect(isBigInt('hello')).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isBigInt(true)).toBe(false)
    expect(isBigInt(false)).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isBigInt(null)).toBe(false)
    expect(isBigInt(undefined)).toBe(false)
  })

  it('should return false for arrays and objects', () => {
    expect(isBigInt([])).toBe(false)
    expect(isBigInt({})).toBe(false)
  })
})

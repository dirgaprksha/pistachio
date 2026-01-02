import { describe, it, expect } from 'vitest'
import { isSymbol } from '../../src/guards'

describe('isSymbol', () => {
  it('should return true for symbols', () => {
    expect(isSymbol(Symbol())).toBe(true)
    expect(isSymbol(Symbol('foo'))).toBe(true)
    expect(isSymbol(Symbol('bar'))).toBe(true)
  })

  it('should return true for global symbols', () => {
    expect(isSymbol(Symbol.for('global'))).toBe(true)
  })

  it('should return true for well-known symbols', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true)
    expect(isSymbol(Symbol.asyncIterator)).toBe(true)
    expect(isSymbol(Symbol.toStringTag)).toBe(true)
  })

  it('should return false for strings', () => {
    expect(isSymbol('Symbol()')).toBe(false)
    expect(isSymbol('hello')).toBe(false)
    expect(isSymbol('')).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isSymbol(123)).toBe(false)
    expect(isSymbol(0)).toBe(false)
    expect(isSymbol(NaN)).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isSymbol(true)).toBe(false)
    expect(isSymbol(false)).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isSymbol(null)).toBe(false)
    expect(isSymbol(undefined)).toBe(false)
  })

  it('should return false for arrays and objects', () => {
    expect(isSymbol([])).toBe(false)
    expect(isSymbol({})).toBe(false)
  })

  it('should return false for functions', () => {
    expect(isSymbol(() => {})).toBe(false)
  })
})

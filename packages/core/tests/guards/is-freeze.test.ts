import { describe, it, expect } from 'vitest'
import { isFreeze } from '../../src/guards'

describe('isFreeze', () => {
  it('should return true for frozen objects', () => {
    const obj = Object.freeze({ foo: 'bar' })
    expect(isFreeze(obj)).toBe(true)
  })

  it('should return true for frozen arrays', () => {
    const arr = Object.freeze([1, 2, 3])
    expect(isFreeze(arr)).toBe(true)
  })

  it('should return true for frozen empty objects', () => {
    const obj = Object.freeze({})
    expect(isFreeze(obj)).toBe(true)
  })

  it('should return true for frozen empty arrays', () => {
    const arr = Object.freeze([])
    expect(isFreeze(arr)).toBe(true)
  })

  it('should return false for non-frozen objects', () => {
    expect(isFreeze({ foo: 'bar' })).toBe(false)
    expect(isFreeze({})).toBe(false)
  })

  it('should return false for non-frozen arrays', () => {
    expect(isFreeze([1, 2, 3])).toBe(false)
    expect(isFreeze([])).toBe(false)
  })

  it('should return false for strings', () => {
    expect(isFreeze('hello')).toBe(false)
    expect(isFreeze('')).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isFreeze(0)).toBe(false)
    expect(isFreeze(123)).toBe(false)
    expect(isFreeze(NaN)).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isFreeze(true)).toBe(false)
    expect(isFreeze(false)).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isFreeze(null)).toBe(false)
    expect(isFreeze(undefined)).toBe(false)
  })

  it('should return false for functions', () => {
    expect(isFreeze(() => {})).toBe(false)
    expect(isFreeze(function () {})).toBe(false)
  })

  it('should return true for frozen nested objects', () => {
    const obj = Object.freeze({ nested: { foo: 'bar' } })
    expect(isFreeze(obj)).toBe(true)
  })

  it('should return false for sealed objects', () => {
    const obj = Object.seal({ foo: 'bar' })
    expect(isFreeze(obj)).toBe(false)
  })
})

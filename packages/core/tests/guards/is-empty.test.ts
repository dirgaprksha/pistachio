import { describe, it, expect } from 'vitest'
import { isEmpty } from '../../src/guards'

describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
  })

  it('should return true for empty strings', () => {
    expect(isEmpty('')).toBe(true)
  })

  it('should return true for empty arrays', () => {
    expect(isEmpty([])).toBe(true)
  })

  it('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true)
  })

  it('should return false for non-empty strings', () => {
    expect(isEmpty('hello')).toBe(false)
    expect(isEmpty(' ')).toBe(false)
    expect(isEmpty('0')).toBe(false)
  })

  it('should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
    expect(isEmpty([null])).toBe(false)
    expect(isEmpty([undefined])).toBe(false)
  })

  it('should return false for non-empty objects', () => {
    expect(isEmpty({ foo: 'bar' })).toBe(false)
    expect(isEmpty({ a: null })).toBe(false)
    expect(isEmpty({ a: undefined })).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty(123)).toBe(false)
    expect(isEmpty(NaN)).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isEmpty(false)).toBe(false)
    expect(isEmpty(true)).toBe(false)
  })
})

import { describe, it, expect } from 'vitest'
import { isDate } from '../../src/guards'

describe('isDate', () => {
  it('should return true for Date objects', () => {
    expect(isDate(new Date())).toBe(true)
    expect(isDate(new Date('2024-01-01'))).toBe(true)
    expect(isDate(new Date(0))).toBe(true)
    expect(isDate(new Date(2024, 0, 1))).toBe(true)
  })

  it('should return true for invalid Date objects', () => {
    expect(isDate(new Date('invalid'))).toBe(true)
  })

  it('should return false for date strings', () => {
    expect(isDate('2024-01-01')).toBe(false)
    expect(isDate('Mon Jan 01 2024')).toBe(false)
  })

  it('should return false for timestamps', () => {
    expect(isDate(Date.now())).toBe(false)
    expect(isDate(1704067200000)).toBe(false)
    expect(isDate(0)).toBe(false)
  })

  it('should return false for strings', () => {
    expect(isDate('hello')).toBe(false)
    expect(isDate('')).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isDate(123)).toBe(false)
    expect(isDate(NaN)).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isDate(true)).toBe(false)
    expect(isDate(false)).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isDate(null)).toBe(false)
    expect(isDate(undefined)).toBe(false)
  })

  it('should return false for arrays and objects', () => {
    expect(isDate([])).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate({ time: new Date() })).toBe(false)
  })
})

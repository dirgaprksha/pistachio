import { describe, it, expect } from 'vitest'
import { slice } from '../../src/strings'

describe('slice', () => {
  it('should slice with positive indices', () => {
    expect(slice('hello world', 0, 5)).toBe('hello')
    expect(slice('hello world', 6, 11)).toBe('world')
    expect(slice('hello', 1, 4)).toBe('ell')
  })

  it('should slice from index to end', () => {
    expect(slice('hello world', 6)).toBe('world')
    expect(slice('hello world', 0)).toBe('hello world')
  })

  it('should handle same start and end indices', () => {
    expect(slice('hello world', 0, 0)).toBe('')
    expect(slice('hello world', 5, 5)).toBe('')
  })

  it('should slice with negative indices', () => {
    expect(slice('hello world', -5)).toBe('world')
    expect(slice('hello world', -5, -1)).toBe('worl')
    expect(slice('hello', -4, -1)).toBe('ell')
  })

  it('should slice with mixed positive and negative indices', () => {
    expect(slice('hello world', 0, -6)).toBe('hello')
    expect(slice('hello world', 3, -3)).toBe('lo wo')
  })

  it('should handle empty strings', () => {
    expect(slice('', 0, 5)).toBe('')
  })

  it('should handle out of bounds indices', () => {
    expect(slice('hello', 10)).toBe('')
    expect(slice('hello', -10)).toBe('hello')
  })
})

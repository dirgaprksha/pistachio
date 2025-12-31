import { describe, it, expect } from 'vitest'
import { truncate } from '../../src/strings'

describe('truncate', () => {
  it('should truncate with default ellipsis', () => {
    expect(truncate('hello world', 5)).toBe('he...')
    expect(truncate('hello world', 8)).toBe('hello...')
    expect(truncate('hello world', 10)).toBe('hello w...')
  })

  it('should not truncate when string is shorter than max', () => {
    expect(truncate('hello world', 11)).toBe('hello world')
    expect(truncate('hello world', 20)).toBe('hello world')
    expect(truncate('hello', 10)).toBe('hello')
    expect(truncate('hello', 5)).toBe('hello')
  })

  it('should truncate with custom suffix', () => {
    expect(truncate('hello world', 5, '…')).toBe('hell…')
    expect(truncate('hello world', 8, ' [more]')).toBe('h [more]')
  })

  it('should handle strings shorter than max', () => {
    expect(truncate('hello', 4)).toBe('h...')
  })

  it('should handle empty strings', () => {
    expect(truncate('', 5)).toBe('')
  })

  it('should handle very short max lengths', () => {
    expect(truncate('hello world', 3)).toBe('...')
    expect(truncate('hello world', 2)).toBe('..')
    expect(truncate('hello world', 1)).toBe('.')
    expect(truncate('hello world', 0)).toBe('')
  })

  it('should truncate without suffix when empty string provided', () => {
    expect(truncate('hello world', 5, '')).toBe('hello')
    expect(truncate('hello', 3, '')).toBe('hel')
  })
})

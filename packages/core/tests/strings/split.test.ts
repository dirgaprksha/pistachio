import { describe, it, expect } from 'vitest'
import { split } from '../../src/strings'

describe('split', () => {
  it('should split by single character separator', () => {
    expect(split('hello world', ' ')).toEqual(['hello', 'world'])
    expect(split('foo,bar,baz', ',')).toEqual(['foo', 'bar', 'baz'])
    expect(split('hello-world-foo-bar', '-')).toEqual(['hello', 'world', 'foo', 'bar'])
  })

  it('should handle strings without separator', () => {
    expect(split('hello', ' ')).toEqual(['hello'])
  })

  it('should handle empty strings', () => {
    expect(split('', ' ')).toEqual([''])
  })

  it('should handle multiple consecutive separators', () => {
    expect(split('hello  world', ' ')).toEqual(['hello', '', 'world'])
  })

  it('should split into characters with empty separator', () => {
    expect(split('hello world', '')).toEqual(['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'])
  })

  it('should split with limit', () => {
    expect(split('foo,bar,baz', ',', 2)).toEqual(['foo', 'bar'])
    expect(split('foo,bar,baz', ',', 1)).toEqual(['foo'])
    expect(split('foo,bar,baz', ',', 0)).toEqual([])
  })

  it('should split by regex pattern', () => {
    expect(split('hello world foo bar', /\s+/)).toEqual(['hello', 'world', 'foo', 'bar'])
    expect(split('hello123world456foo', /\d+/)).toEqual(['hello', 'world', 'foo'])
  })

  it('should split by regex with limit', () => {
    expect(split('hello  world  foo', /\s+/, 2)).toEqual(['hello', 'world'])
  })
})

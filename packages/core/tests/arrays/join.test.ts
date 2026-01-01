import { describe, it, expect } from 'vitest'
import { join } from '../../src/arrays'

describe('join', () => {
  it('should join with default comma separator', () => {
    expect(join([1, 2, 3, 4, 5])).toBe('1,2,3,4,5')
    expect(join(['apple', 'banana', 'cherry'])).toBe('apple,banana,cherry')
  })

  it('should join with custom separators', () => {
    expect(join([1, 2, 3, 4, 5], '')).toBe('12345')
    expect(join([1, 2, 3, 4, 5], '-')).toBe('1-2-3-4-5')
    expect(join([1, 2, 3, 4, 5], ' ')).toBe('1 2 3 4 5')
    expect(join(['a', 'b', 'c'], '|')).toBe('a|b|c')
  })

  it('should handle empty arrays', () => {
    expect(join([], ',')).toBe('')
  })

  it('should handle single element arrays', () => {
    expect(join([1], ',')).toBe('1')
  })

  it('should join with word separators', () => {
    expect(join([1, 2], ' and ')).toBe('1 and 2')
    expect(join(['apple', 'banana', 'cherry'], ', ')).toBe('apple, banana, cherry')
  })

  it('should join strings', () => {
    expect(join(['hello', 'world'], ' ')).toBe('hello world')
    expect(join(['a', 'b', 'c', 'd'], '')).toBe('abcd')
    expect(join(['Hello', 'World'], '')).toBe('HelloWorld')
  })

  it('should join boolean values', () => {
    expect(join([true, false, true], ',')).toBe('true,false,true')
  })

  it('should join with symbolic separators', () => {
    expect(join([1, 2, 3], ' + ')).toBe('1 + 2 + 3')
    expect(join(['foo', 'bar', 'baz'], '/')).toBe('foo/bar/baz')
    expect(join(['one', 'two', 'three'], ' > ')).toBe('one > two > three')
    expect(join([1, 2, 3, 4, 5], ' :: ')).toBe('1 :: 2 :: 3 :: 4 :: 5')
  })

  it('should join numbers with separators', () => {
    expect(join([0, 1, 2, 3], '-')).toBe('0-1-2-3')
    expect(join([10, 20, 30], '\n')).toBe('10\n20\n30')
    expect(join([1.5, 2.7, 3.9], ' | ')).toBe('1.5 | 2.7 | 3.9')
  })

  it('should join path segments', () => {
    expect(join(['path', 'to', 'file'], '/')).toBe('path/to/file')
  })

  it('should preserve empty strings', () => {
    expect(join(['a', '', 'b', '', 'c'], ',')).toBe('a,,b,,c')
  })

  it('should handle null and undefined values', () => {
    expect(join([null, undefined, 1, 2], ',')).toBe(',,1,2')
  })

  it('should flatten nested arrays', () => {
    expect(
      join(
        [
          ['a', 'b'],
          ['c', 'd'],
        ],
        ',',
      ),
    ).toBe('a,b,c,d')
  })
})

import { describe, it, expect } from 'vitest'
import { map } from '../../src/arrays'

describe('map', () => {
  it('should transform numbers with arithmetic operations', () => {
    expect(map([1, 2, 3, 4, 5], (x) => x * 2)).toEqual([2, 4, 6, 8, 10])
    expect(map([1, 2, 3], (x) => x + 1)).toEqual([2, 3, 4])
    expect(map([1, 2, 3], (x) => x * x)).toEqual([1, 4, 9])
  })

  it('should handle empty arrays', () => {
    expect(map([], (x) => x * 2)).toEqual([])
  })

  it('should map to constant values', () => {
    expect(map([1, 2, 3], () => 'a')).toEqual(['a', 'a', 'a'])
  })

  it('should map to boolean results', () => {
    expect(map([0, 1, 2, 3, 4], (x) => x === 0)).toEqual([true, false, false, false, false])
    expect(map([1, 2, 3, 4, 5], (x) => x > 3)).toEqual([false, false, false, true, true])
  })

  it('should transform with Math functions', () => {
    expect(map([-5, -3, 0, 3, 5], (x) => Math.abs(x))).toEqual([5, 3, 0, 3, 5])
    expect(map([1.5, 2.7, 3.9], (x) => Math.floor(x))).toEqual([1, 2, 3])
  })

  it('should transform strings', () => {
    expect(map(['apple', 'banana', 'cherry'], (x) => x.toUpperCase())).toEqual(['APPLE', 'BANANA', 'CHERRY'])
    expect(map(['hello', 'world'], (x) => x.length)).toEqual([5, 5])
    expect(map(['a', 'b', 'c'], (x) => x.repeat(2))).toEqual(['aa', 'bb', 'cc'])
  })

  it('should support index-based transformations', () => {
    expect(map(['a', 'b', 'c', 'd'], (x, i) => `${i}:${x}`)).toEqual(['0:a', '1:b', '2:c', '3:d'])
    expect(map([1, 2, 3, 4], (x, i) => x + i)).toEqual([1, 3, 5, 7])
    expect(map(['a', 'b', 'c'], (x, i) => (i % 2 === 0 ? x.toUpperCase() : x))).toEqual(['A', 'b', 'C'])
  })

  it('should extract object properties', () => {
    expect(
      map(
        [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Charlie' },
        ],
        (x) => x.name,
      ),
    ).toEqual(['Alice', 'Bob', 'Charlie'])
  })

  it('should transform objects', () => {
    expect(
      map(
        [
          { id: 1, active: true },
          { id: 2, active: false },
          { id: 3, active: true },
        ],
        (x) => ({ ...x, active: !x.active }),
      ),
    ).toEqual([
      { id: 1, active: false },
      { id: 2, active: true },
      { id: 3, active: false },
    ])

    expect(map([1, 2, 3], (x) => ({ value: x }))).toEqual([{ value: 1 }, { value: 2 }, { value: 3 }])
  })

  it('should negate boolean values', () => {
    expect(map([true, false, true, false], (x) => !x)).toEqual([false, true, false, true])
  })

  it('should map to arrays', () => {
    expect(map([1, 2, 3], (x) => [x, x * 2])).toEqual([
      [1, 2],
      [2, 4],
      [3, 6],
    ])
  })

  it('should support array parameter in mapper', () => {
    expect(map([1, 2, 3, 4, 5], (x, _i, arr) => x / arr.length)).toEqual([0.2, 0.4, 0.6, 0.8, 1])
  })

  it('should convert types', () => {
    expect(map([10, 20, 30], (x) => String(x))).toEqual(['10', '20', '30'])
  })
})

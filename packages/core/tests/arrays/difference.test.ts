import { describe, it, expect } from 'vitest'
import { difference } from '../../src/arrays'

describe('difference', () => {
  it('should return elements in first array not in second', () => {
    expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1])
    expect(difference([1, 2, 3, 4], [3, 4, 5])).toEqual([1, 2])
  })

  it('should handle empty arrays', () => {
    expect(difference([], [])).toEqual([])
    expect(difference([], [1, 2, 3])).toEqual([])
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3])
  })

  it('should return empty array when arrays are identical', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([])
  })

  it('should return first array when no common elements', () => {
    expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3])
  })

  it('should handle duplicate elements', () => {
    expect(difference([1, 2, 2, 3], [2])).toEqual([1, 3])
  })

  it('should work with string arrays', () => {
    expect(difference(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['a'])
  })

  it('should support symmetric difference', () => {
    expect(difference([1, 2, 3], [2, 3, 4], undefined, { symmetric: true })).toEqual([1, 4])
    expect(difference([1, 2, 3, 4], [3, 4, 5, 6], undefined, { symmetric: true })).toEqual([1, 2, 5, 6])
    expect(difference([1, 2, 3], [4, 5, 6], undefined, { symmetric: true })).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('should handle symmetric difference with empty arrays', () => {
    expect(difference([1, 2, 3], [1, 2, 3], undefined, { symmetric: true })).toEqual([])
    expect(difference([], [1, 2, 3], undefined, { symmetric: true })).toEqual([1, 2, 3])
    expect(difference([1, 2, 3], [], undefined, { symmetric: true })).toEqual([1, 2, 3])
    expect(difference([], [], undefined, { symmetric: true })).toEqual([])
  })

  it('should support symmetric difference with strings', () => {
    expect(difference(['a', 'b', 'c'], ['b', 'c', 'd'], undefined, { symmetric: true })).toEqual(['a', 'd'])
  })

  it('should support custom comparator function', () => {
    expect(difference(['a', 'bb', 'ccc'], ['dd', 'eee'], (a, b) => a.length === b.length)).toEqual(['a'])
  })

  it('should support custom comparator with objects', () => {
    expect(
      difference(
        [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Charlie' },
        ],
        [
          { id: 2, name: 'Bob' },
          { id: 4, name: 'David' },
        ],
        (a: { id: number }, b: { id: number }) => a.id === b.id,
      ),
    ).toEqual([
      { id: 1, name: 'Alice' },
      { id: 3, name: 'Charlie' },
    ])
  })

  it('should support custom comparator with empty arrays', () => {
    expect(difference([], [], (a, b) => a === b)).toEqual([])
    expect(difference([], [1, 2, 3], (a, b) => a === b)).toEqual([])
    expect(difference([1, 2, 3], [], (a, b) => a === b)).toEqual([1, 2, 3])
  })

  it('should support case-insensitive comparison', () => {
    expect(difference(['Hello', 'World'], ['hello', 'foo'], (a, b) => a.toLowerCase() === b.toLowerCase())).toEqual([
      'World',
    ])
  })

  it('should combine custom comparator with symmetric difference', () => {
    expect(
      difference(['a', 'bb', 'ccc'], ['dd', 'eee', 'ffff'], (a, b) => a.length === b.length, {
        symmetric: true,
      }),
    ).toEqual(['a', 'ffff'])

    expect(
      difference(
        [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
        ],
        [
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Charlie' },
        ],
        (a: { id: number }, b: { id: number }) => a.id === b.id,
        { symmetric: true },
      ),
    ).toEqual([
      { id: 1, name: 'Alice' },
      { id: 3, name: 'Charlie' },
    ])
  })

  it('should handle all edge cases with symmetric and comparator', () => {
    expect(difference([1, 2], [3, 4], (a, b) => a === b, { symmetric: true })).toEqual([1, 2, 3, 4])
    expect(difference([1, 2], [1, 2], (a, b) => a === b, { symmetric: true })).toEqual([])
    expect(difference([], [1, 2, 3], (a, b) => a === b, { symmetric: true })).toEqual([1, 2, 3])
    expect(difference([1, 2, 3], [], (a, b) => a === b, { symmetric: true })).toEqual([1, 2, 3])
    expect(
      difference(['Hello', 'World'], ['hello', 'Foo'], (a, b) => a.toLowerCase() === b.toLowerCase(), {
        symmetric: true,
      }),
    ).toEqual(['World', 'Foo'])
  })
})

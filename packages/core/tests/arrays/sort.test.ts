import { describe, it, expect } from 'vitest'
import { sort } from '../../src/arrays'

describe('sort', () => {
  it('should sort numbers with default lexicographic order', () => {
    expect(sort([3, 1, 2])).toEqual([1, 2, 3])
    expect(sort([5, 3, 8, 1, 9, 2])).toEqual([1, 2, 3, 5, 8, 9])
    expect(sort([10, 5, 20, 15])).toEqual([10, 15, 20, 5])
  })

  it('should handle empty arrays', () => {
    expect(sort([])).toEqual([])
    expect(sort([], (a, b) => a - b)).toEqual([])
  })

  it('should handle single element arrays', () => {
    expect(sort([1])).toEqual([1])
    expect(sort([1], (a, b) => a - b)).toEqual([1])
  })

  it('should handle duplicate values', () => {
    expect(sort([1, 1, 1])).toEqual([1, 1, 1])
  })

  it('should sort negative numbers with default order', () => {
    expect(sort([-3, -1, -5, -2])).toEqual([-1, -2, -3, -5])
    expect(sort([3, -1, 2, -5, 0])).toEqual([-1, -5, 0, 2, 3])
  })

  it('should sort strings alphabetically', () => {
    expect(sort(['banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry'])
    expect(sort(['c', 'a', 'b'])).toEqual(['a', 'b', 'c'])
  })

  it('should sort numbers with comparator in ascending order', () => {
    expect(sort([3, 1, 2], (a, b) => a - b)).toEqual([1, 2, 3])
    expect(sort([10, 5, 20, 15], (a, b) => a - b)).toEqual([5, 10, 15, 20])
    expect(sort([-3, -1, -5, -2], (a, b) => a - b)).toEqual([-5, -3, -2, -1])
  })

  it('should sort numbers with comparator in descending order', () => {
    expect(sort([3, 1, 2], (a, b) => b - a)).toEqual([3, 2, 1])
    expect(sort([10, 5, 20, 15], (a, b) => b - a)).toEqual([20, 15, 10, 5])
    expect(sort([-3, -1, -5, -2], (a, b) => b - a)).toEqual([-1, -2, -3, -5])
  })

  it('should sort strings with comparator', () => {
    expect(sort(['banana', 'apple', 'cherry'], (a, b) => a.localeCompare(b))).toEqual(['apple', 'banana', 'cherry'])
    expect(sort(['banana', 'apple', 'cherry'], (a, b) => b.localeCompare(a))).toEqual(['cherry', 'banana', 'apple'])
  })

  it('should sort objects by numeric property', () => {
    expect(
      sort(
        [
          { id: 3, name: 'Charlie' },
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
        ],
        (a, b) => a.id - b.id,
      ),
    ).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ])
  })

  it('should sort objects by string property', () => {
    expect(
      sort(
        [
          { id: 3, name: 'Charlie' },
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
        ],
        (a, b) => a.name.localeCompare(b.name),
      ),
    ).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ])
  })

  it('should sort by custom property like string length', () => {
    expect(sort(['short', 'a', 'medium'], (a, b) => a.length - b.length)).toEqual(['a', 'short', 'medium'])
  })
})

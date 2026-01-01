import { describe, it, expect } from 'vitest'
import { filter } from '../../src/arrays'

describe('filter', () => {
  it('should filter numbers with comparison predicates', () => {
    expect(filter([1, 2, 3, 4, 5], (x) => x > 2)).toEqual([3, 4, 5])
    expect(filter([1, 2, 3, 4, 5], (x) => x < 3)).toEqual([1, 2])
  })

  it('should filter even and odd numbers', () => {
    expect(filter([1, 2, 3, 4, 5], (x) => x % 2 === 0)).toEqual([2, 4])
    expect(filter([1, 2, 3, 4, 5], (x) => x % 2 !== 0)).toEqual([1, 3, 5])
  })

  it('should handle empty arrays', () => {
    expect(filter([], (x) => x > 0)).toEqual([])
  })

  it('should handle always true and always false predicates', () => {
    expect(filter([1, 2, 3], () => true)).toEqual([1, 2, 3])
    expect(filter([1, 2, 3], () => false)).toEqual([])
  })

  it('should filter specific values', () => {
    expect(filter([0, 1, 2, 3, 4], (x) => x === 0)).toEqual([0])
  })

  it('should filter negative and positive numbers', () => {
    expect(filter([-5, -3, 0, 3, 5], (x) => x >= 0)).toEqual([0, 3, 5])
    expect(filter([-5, -3, 0, 3, 5], (x) => x < 0)).toEqual([-5, -3])
  })

  it('should filter strings by prefix', () => {
    expect(filter(['apple', 'banana', 'cherry'], (x) => x.startsWith('a'))).toEqual(['apple'])
  })

  it('should filter strings by length', () => {
    expect(filter(['apple', 'banana', 'cherry'], (x) => x.length > 5)).toEqual(['banana', 'cherry'])
  })

  it('should filter strings by content', () => {
    expect(filter(['hello', 'world', 'test'], (x) => x.includes('o'))).toEqual(['hello', 'world'])
  })

  it('should support index-based filtering', () => {
    expect(filter(['a', 'b', 'c', 'd'], (_x, i) => i % 2 === 0)).toEqual(['a', 'c'])
    expect(filter(['a', 'b', 'c', 'd'], (_x, i) => i > 1)).toEqual(['c', 'd'])
  })

  it('should filter objects by property', () => {
    expect(
      filter(
        [
          { id: 1, active: true },
          { id: 2, active: false },
          { id: 3, active: true },
        ],
        (x) => x.active,
      ),
    ).toEqual([
      { id: 1, active: true },
      { id: 3, active: true },
    ])

    expect(
      filter(
        [
          { name: 'Alice', age: 25 },
          { name: 'Bob', age: 17 },
          { name: 'Charlie', age: 30 },
        ],
        (x) => x.age >= 18,
      ),
    ).toEqual([
      { name: 'Alice', age: 25 },
      { name: 'Charlie', age: 30 },
    ])
  })

  it('should filter boolean values', () => {
    expect(filter([true, false, true, false], (x) => x)).toEqual([true, true])
  })

  it('should filter null and undefined values', () => {
    expect(filter([null, 1, undefined, 2, null], (x) => x !== null && x !== undefined)).toEqual([1, 2])
  })

  it('should support array parameter in predicate', () => {
    expect(filter([1, 2, 3, 4, 5], (x, _i, arr) => x > arr.length / 2)).toEqual([3, 4, 5])
  })
})

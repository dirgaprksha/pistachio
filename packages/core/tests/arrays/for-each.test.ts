import { describe, it, expect } from 'vitest'
import { forEach } from '../../src/arrays'

describe('forEach', () => {
  it('should iterate and accumulate sum', () => {
    let sum = 0
    forEach([1, 2, 3, 4, 5], (x) => {
      sum += x
    })
    expect(sum).toBe(15)
  })

  it('should transform elements during iteration', () => {
    const result: number[] = []
    forEach([1, 2, 3], (x) => {
      result.push(x * 2)
    })
    expect(result).toEqual([2, 4, 6])
  })

  it('should count iterations', () => {
    let count = 0
    forEach([1, 2, 3, 4], () => {
      count++
    })
    expect(count).toBe(4)
  })

  it('should not iterate over empty arrays', () => {
    let count = 0
    forEach([], () => {
      count++
    })
    expect(count).toBe(0)
  })

  it('should provide index to callback', () => {
    const indices: number[] = []
    forEach(['a', 'b', 'c'], (_x, i) => {
      indices.push(i)
    })
    expect(indices).toEqual([0, 1, 2])
  })

  it('should transform strings to uppercase', () => {
    const values: string[] = []
    forEach(['apple', 'banana', 'cherry'], (x) => {
      values.push(x.toUpperCase())
    })
    expect(values).toEqual(['APPLE', 'BANANA', 'CHERRY'])
  })

  it('should calculate product of numbers', () => {
    let product = 1
    forEach([2, 3, 4], (x) => {
      product *= x
    })
    expect(product).toBe(24)
  })

  it('should combine element with index', () => {
    const combined: string[] = []
    forEach(['hello', 'world'], (x, i) => {
      combined.push(`${i}:${x}`)
    })
    expect(combined).toEqual(['0:hello', '1:world'])
  })

  it('should build array of objects', () => {
    const objects: Array<{ id: number; value: string }> = []
    forEach([1, 2, 3], (x) => {
      objects.push({ id: x, value: `item${x}` })
    })
    expect(objects).toEqual([
      { id: 1, value: 'item1' },
      { id: 2, value: 'item2' },
      { id: 3, value: 'item3' },
    ])
  })

  it('should provide array parameter to callback', () => {
    let arrayLength = 0
    forEach([10, 20, 30], (_x, _i, arr) => {
      arrayLength = arr.length
    })
    expect(arrayLength).toBe(3)
  })

  it('should count truthy boolean values', () => {
    let boolCount = 0
    forEach([true, false, true, true], (x) => {
      if (x) boolCount++
    })
    expect(boolCount).toBe(3)
  })

  it('should handle negative numbers', () => {
    let negativeSum = 0
    forEach([-1, -2, -3], (x) => {
      negativeSum += x
    })
    expect(negativeSum).toBe(-6)
  })

  it('should handle mixed type arrays', () => {
    const mixed: Array<string | number> = []
    forEach([1, 'a', 2, 'b'], (x) => {
      mixed.push(x)
    })
    expect(mixed).toEqual([1, 'a', 2, 'b'])
  })
})

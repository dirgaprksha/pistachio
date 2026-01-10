import { describe, it, expect } from 'vitest'
import { pick } from '../../src/objects'

describe('pick', () => {
  it('should pick specified keys from object', () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 })
    expect(pick({ x: 10, y: 20, z: 30 }, ['x'])).toEqual({ x: 10 })
    expect(pick({ name: 'Alice', age: 25, city: 'NYC' }, ['name', 'age'])).toEqual({
      name: 'Alice',
      age: 25,
    })
  })

  it('should not mutate source object', () => {
    const object = { a: 1, b: 2, c: 3 }
    const picked = pick(object, ['a', 'b'])

    expect(picked).toEqual({ a: 1, b: 2 })
    expect(object).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should return new object reference', () => {
    const object = { value: 'test', status: 'active', id: 1 }
    const picked = pick(object, ['value', 'status'])

    expect(picked).toEqual({ value: 'test', status: 'active' })
    expect(picked).not.toBe(object)
  })

  it('should handle empty keys array', () => {
    expect(pick({ a: 1, b: 2 }, [])).toEqual({})
    expect(pick({ x: 10, y: 20, z: 30 }, [])).toEqual({})
  })

  it('should handle picking all keys', () => {
    expect(pick({ a: 1, b: 2 }, ['a', 'b'])).toEqual({ a: 1, b: 2 })
    expect(pick({ x: 10 }, ['x'])).toEqual({ x: 10 })
  })

  it('should ignore non-existent keys', () => {
    expect(pick({ a: 1, b: 2 } as Record<string, number>, ['a', 'c'])).toEqual({ a: 1 })
    expect(pick({ x: 10 } as Record<string, number>, ['x', 'y'])).toEqual({ x: 10 })
  })

  it('should handle empty object', () => {
    expect(pick({}, [])).toEqual({})
    expect(pick({} as Record<string, unknown>, ['a'])).toEqual({})
  })

  it('should pick boolean properties', () => {
    expect(pick({ enabled: true, visible: false, active: true }, ['enabled', 'visible'])).toEqual({
      enabled: true,
      visible: false,
    })
  })

  it('should pick numeric properties', () => {
    expect(pick({ count: 0, total: 100, sum: 50 }, ['count', 'total'])).toEqual({
      count: 0,
      total: 100,
    })
  })

  it('should pick string properties', () => {
    expect(pick({ first: 'John', last: 'Doe', middle: 'A' }, ['first', 'last'])).toEqual({
      first: 'John',
      last: 'Doe',
    })
  })

  it('should pick mixed type properties', () => {
    expect(pick({ id: 1, name: 'Test', active: true, data: null }, ['id', 'name', 'active'])).toEqual({
      id: 1,
      name: 'Test',
      active: true,
    })
  })

  it('should handle objects with arrays', () => {
    expect(pick({ items: [1, 2, 3], values: [4, 5] }, ['items'])).toEqual({ items: [1, 2, 3] })
  })

  it('should handle objects with nested objects', () => {
    expect(pick({ data: { x: 1 }, meta: { y: 2 } }, ['data'])).toEqual({ data: { x: 1 } })
  })

  it('should handle null and undefined values', () => {
    expect(pick({ a: null, b: undefined, c: 1 }, ['a', 'b'])).toEqual({ a: null, b: undefined })
  })

  it('should pick single property', () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ b: 2 })
    expect(pick({ name: 'Test' }, ['name'])).toEqual({ name: 'Test' })
  })

  it('should handle duplicate keys in array', () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'a', 'b'])).toEqual({ a: 1, b: 2 })
  })
})

import { describe, it, expect } from 'vitest'
import { omit } from '../../src/objects'

describe('omit', () => {
  it('should omit specified keys from object', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ a: 1, c: 3 })
    expect(omit({ x: 10, y: 20, z: 30 }, ['y', 'z'])).toEqual({ x: 10 })
    expect(omit({ name: 'Alice', age: 25, city: 'NYC' }, ['city'])).toEqual({
      name: 'Alice',
      age: 25,
    })
  })

  it('should not mutate source object', () => {
    const object = { a: 1, b: 2, c: 3 }
    const omitted = omit(object, ['b'])

    expect(omitted).toEqual({ a: 1, c: 3 })
    expect(object).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should return new object reference', () => {
    const object = { value: 'test', status: 'active', id: 1 }
    const omitted = omit(object, ['id'])

    expect(omitted).toEqual({ value: 'test', status: 'active' })
    expect(omitted).not.toBe(object)
  })

  it('should handle empty keys array', () => {
    expect(omit({ a: 1, b: 2 }, [])).toEqual({ a: 1, b: 2 })
    expect(omit({ x: 10, y: 20, z: 30 }, [])).toEqual({ x: 10, y: 20, z: 30 })
  })

  it('should handle omitting all keys', () => {
    expect(omit({ a: 1, b: 2 }, ['a', 'b'])).toEqual({})
    expect(omit({ x: 10 }, ['x'])).toEqual({})
  })

  it('should ignore non-existent keys', () => {
    expect(omit({ a: 1, b: 2 } as Record<string, number>, ['c'])).toEqual({ a: 1, b: 2 })
    expect(omit({ x: 10 } as Record<string, number>, ['y'])).toEqual({ x: 10 })
  })

  it('should handle empty object', () => {
    expect(omit({}, [])).toEqual({})
    expect(omit({} as Record<string, unknown>, ['a'])).toEqual({})
  })

  it('should omit boolean properties', () => {
    expect(omit({ enabled: true, visible: false, active: true }, ['visible'])).toEqual({
      enabled: true,
      active: true,
    })
  })

  it('should omit numeric properties', () => {
    expect(omit({ count: 0, total: 100, sum: 50 }, ['sum'])).toEqual({ count: 0, total: 100 })
  })

  it('should omit string properties', () => {
    expect(omit({ first: 'John', last: 'Doe', middle: 'A' }, ['middle'])).toEqual({
      first: 'John',
      last: 'Doe',
    })
  })

  it('should omit mixed type properties', () => {
    expect(omit({ id: 1, name: 'Test', active: true, data: null }, ['data'])).toEqual({
      id: 1,
      name: 'Test',
      active: true,
    })
  })

  it('should handle objects with arrays', () => {
    expect(omit({ items: [1, 2, 3], values: [4, 5] }, ['values'])).toEqual({ items: [1, 2, 3] })
  })

  it('should handle objects with nested objects', () => {
    expect(omit({ data: { x: 1 }, meta: { y: 2 } }, ['meta'])).toEqual({ data: { x: 1 } })
  })

  it('should handle null and undefined values', () => {
    expect(omit({ a: null, b: undefined, c: 1 }, ['c'])).toEqual({ a: null, b: undefined })
  })

  it('should omit single property', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ a: 1, c: 3 })
    expect(omit({ name: 'Test', id: 1 }, ['id'])).toEqual({ name: 'Test' })
  })

  it('should omit multiple properties', () => {
    expect(omit({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'd'])).toEqual({ a: 1, c: 3 })
    expect(omit({ x: 1, y: 2, z: 3 }, ['x', 'y'])).toEqual({ z: 3 })
  })

  it('should handle duplicate keys in array', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'a'])).toEqual({ b: 2, c: 3 })
  })

  it('should preserve property values correctly', () => {
    const object = { count: 0, total: 100, active: false }
    const omitted = omit(object, ['active'])

    expect(omitted.count).toBe(0)
    expect(omitted.total).toBe(100)
  })

  it('should handle objects with symbols as values', () => {
    const sym = Symbol('test')
    expect(omit({ a: sym, b: 'value' }, ['b'])).toEqual({ a: sym })
  })
})

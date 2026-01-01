import { describe, it, expect } from 'vitest'
import { merge } from '../../src/objects'

describe('merge', () => {
  it('should merge two objects with distinct keys', () => {
    expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })
    expect(merge({ x: 1, y: 2 }, { z: 3 })).toEqual({ x: 1, y: 2, z: 3 })
    expect(merge({ name: 'Alice' }, { age: 25 })).toEqual({ name: 'Alice', age: 25 })
  })

  it('should not mutate source objects', () => {
    const object1 = { a: 1 }
    const object2 = { b: 2 }
    const merged = merge(object1, object2)

    expect(merged).toEqual({ a: 1, b: 2 })
    expect(object1).toEqual({ a: 1 })
    expect(object2).toEqual({ b: 2 })
  })

  it('should override properties from first object with second', () => {
    expect(merge({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual({ a: 1, b: 3, c: 4 })
    expect(merge({ x: 10 }, { x: 20 })).toEqual({ x: 20 })
    expect(merge({ name: 'John', age: 30 }, { age: 35, city: 'NYC' })).toEqual({
      name: 'John',
      age: 35,
      city: 'NYC',
    })
    expect(merge({ value: 1 }, { value: 2 })).toEqual({ value: 2 })
    expect(merge({ count: 5, total: 10 }, { count: 15 })).toEqual({ count: 15, total: 10 })
  })

  it('should handle empty objects', () => {
    expect(merge({}, { a: 1 })).toEqual({ a: 1 })
    expect(merge({ a: 1 }, {})).toEqual({ a: 1 })
    expect(merge({}, {})).toEqual({})
  })

  it('should merge multiple properties', () => {
    expect(merge({ a: 1, b: 2, c: 3 }, { d: 4, e: 5 })).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(merge({ a: 1, b: 2 }, { c: 3, d: 4, e: 5 })).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
  })

  it('should merge boolean properties', () => {
    expect(merge({ enabled: true }, { visible: false })).toEqual({ enabled: true, visible: false })
  })

  it('should merge numeric properties', () => {
    expect(merge({ count: 0 }, { total: 100 })).toEqual({ count: 0, total: 100 })
    expect(merge({ x: 1 }, { y: 2, z: 3 })).toEqual({ x: 1, y: 2, z: 3 })
  })

  it('should merge string properties', () => {
    expect(merge({ first: 'John' }, { last: 'Doe' })).toEqual({ first: 'John', last: 'Doe' })
  })

  it('should merge mixed type properties', () => {
    expect(merge({ id: 1, name: 'Test' }, { active: true })).toEqual({
      id: 1,
      name: 'Test',
      active: true,
    })
  })

  it('should override arrays and objects', () => {
    expect(merge({ items: [1, 2] }, { items: [3, 4] })).toEqual({ items: [3, 4] })
    expect(merge({ data: { x: 1 } }, { data: { y: 2 } })).toEqual({ data: { y: 2 } })
  })

  it('should handle null and undefined values', () => {
    expect(merge({ a: null }, { b: undefined })).toEqual({ a: null, b: undefined })
  })

  it('should return new object reference', () => {
    const object1 = { value: 'test' }
    const object2 = { status: 'active' }
    const merged = merge(object1, object2)

    expect(merged).toEqual({ value: 'test', status: 'active' })
    expect(merged).not.toBe(object1)
    expect(merged).not.toBe(object2)
  })
})

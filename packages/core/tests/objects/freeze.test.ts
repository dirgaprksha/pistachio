import { describe, it, expect } from 'vitest'
import { freeze } from '../../src/objects'

describe('freeze', () => {
  it('should freeze object and preserve values', () => {
    const object = { a: 1, b: 2 }
    const frozen = freeze(object)

    expect(Object.isFrozen(frozen)).toBe(true)
    expect(frozen).toEqual({ a: 1, b: 2 })
  })

  it('should return same reference', () => {
    const object = { x: 1, y: 2, z: 3 }
    const frozen = freeze(object)

    expect(frozen).toBe(object)
  })

  it('should prevent property modification', () => {
    const object = { name: 'Alice', age: 25 }
    const frozen = freeze(object)

    expect(() => {
      // @ts-expect-error - Testing runtime immutability
      frozen.age = 30
    }).toThrow()
    expect(frozen.age).toBe(25)
  })

  it('should prevent property deletion', () => {
    const object = { value: 'test' }
    const frozen = freeze(object)

    expect(() => {
      // @ts-expect-error - Testing runtime immutability
      delete frozen.value
    }).toThrow()
    expect(frozen.value).toBe('test')
  })

  it('should prevent adding new properties', () => {
    const object = {}
    const frozen = freeze(object)

    expect(() => {
      // @ts-expect-error - Testing runtime immutability
      frozen.newProp = 'value'
    }).toThrow()
    expect(frozen).toEqual({})
  })

  it('should handle objects with arrays', () => {
    const object = { items: [1, 2, 3] }
    const frozen = freeze(object)

    expect(Object.isFrozen(frozen)).toBe(true)
    expect(frozen.items).toEqual([1, 2, 3])
  })

  it('should handle objects with null values', () => {
    const object = { value: null }
    const frozen = freeze(object)

    expect(Object.isFrozen(frozen)).toBe(true)
    expect(frozen.value).toBeNull()
  })

  it('should perform shallow freeze only', () => {
    const object = { data: { nested: 1 } }
    const frozen = freeze(object)

    expect(Object.isFrozen(frozen)).toBe(true)
    frozen.data.nested = 2
    expect(frozen.data.nested).toBe(2)
  })
})

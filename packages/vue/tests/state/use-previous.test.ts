import { describe, it, expect } from 'vitest'
import { ref, shallowRef } from 'vue'
import { usePrevious } from '../../src/state'

describe('usePrevious', () => {
  it('should return undefined on initial render', () => {
    const value = ref(0)
    const previous = usePrevious(value)

    expect(previous.value).toBeUndefined()
  })

  it('should return previous value after rerender', () => {
    const value = ref(0)
    const previous = usePrevious(value)

    expect(previous.value).toBeUndefined()

    value.value = 1

    expect(previous.value).toBe(0)
  })

  it('should track string values', () => {
    const value = ref('initial')
    const previous = usePrevious(value)

    expect(previous.value).toBeUndefined()

    value.value = 'updated'

    expect(previous.value).toBe('initial')

    value.value = 'final'

    expect(previous.value).toBe('updated')
  })

  it('should track boolean values', () => {
    const value = ref(false)
    const previous = usePrevious(value)

    expect(previous.value).toBeUndefined()

    value.value = true

    expect(previous.value).toBe(false)

    value.value = false

    expect(previous.value).toBe(true)
  })

  it('should track object values', () => {
    const object1 = { name: 'first' }
    const object2 = { name: 'second' }
    const object3 = { name: 'third' }
    const value = shallowRef(object1)
    const previous = usePrevious(value)

    expect(previous.value).toBeUndefined()

    value.value = object2

    expect(previous.value).toBe(object1)

    value.value = object3

    expect(previous.value).toBe(object2)
  })

  it('should track array values', () => {
    const array1 = [1, 2, 3]
    const array2 = [4, 5, 6]
    const value = shallowRef(array1)
    const previous = usePrevious(value)

    expect(previous.value).toBeUndefined()

    value.value = array2

    expect(previous.value).toBe(array1)
  })

  it('should track null and undefined values', () => {
    const value = ref<null | undefined | string>(null)
    const previous = usePrevious(value)

    expect(previous.value).toBeUndefined()

    value.value = undefined

    expect(previous.value).toBeNull()

    value.value = 'value'

    expect(previous.value).toBeUndefined()
  })

  it('should handle multiple consecutive rerenders', () => {
    const value = ref(1)
    const previous = usePrevious(value)

    expect(previous.value).toBeUndefined()

    value.value = 2
    expect(previous.value).toBe(1)

    value.value = 3
    expect(previous.value).toBe(2)

    value.value = 4
    expect(previous.value).toBe(3)

    value.value = 5
    expect(previous.value).toBe(4)
  })

  it('should work with complex nested objects', () => {
    const object1 = { user: { name: 'John', age: 30 }, settings: { theme: 'dark' } }
    const object2 = { user: { name: 'Jane', age: 25 }, settings: { theme: 'light' } }

    const value = shallowRef(object1)
    const previous = usePrevious(value)

    expect(previous.value).toBeUndefined()

    value.value = object2

    expect(previous.value).toBe(object1)
    expect(previous.value).toEqual({ user: { name: 'John', age: 30 }, settings: { theme: 'dark' } })
  })

  it('should work with non-ref primitive value', () => {
    const previous = usePrevious(42)

    expect(previous.value).toBeUndefined()
  })
})

import { renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { usePrevious } from '../../src/state'

describe('usePrevious', () => {
  it('should return undefined on initial render', () => {
    const { result } = renderHook(() => usePrevious(0))

    expect(result.current).toBeUndefined()
  })

  it('should return previous value after rerender', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 0 },
    })

    expect(result.current).toBeUndefined()

    rerender({ value: 1 })

    expect(result.current).toBe(0)
  })

  it('should track string values', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 'initial' },
    })

    expect(result.current).toBeUndefined()

    rerender({ value: 'updated' })

    expect(result.current).toBe('initial')

    rerender({ value: 'final' })

    expect(result.current).toBe('updated')
  })

  it('should track boolean values', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: false },
    })

    expect(result.current).toBeUndefined()

    rerender({ value: true })

    expect(result.current).toBe(false)

    rerender({ value: false })

    expect(result.current).toBe(true)
  })

  it('should track object values', () => {
    const object1 = { name: 'first' }
    const object2 = { name: 'second' }
    const object3 = { name: 'third' }
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: object1 },
    })

    expect(result.current).toBeUndefined()

    rerender({ value: object2 })

    expect(result.current).toBe(object1)

    rerender({ value: object3 })

    expect(result.current).toBe(object2)
  })

  it('should track array values', () => {
    const array1 = [1, 2, 3]
    const array2 = [4, 5, 6]
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: array1 },
    })

    expect(result.current).toBeUndefined()

    rerender({ value: array2 })

    expect(result.current).toBe(array1)
  })

  it('should track null and undefined values', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: null as null | undefined | string },
    })

    expect(result.current).toBeUndefined()

    rerender({ value: undefined })

    expect(result.current).toBeNull()

    rerender({ value: 'value' })

    expect(result.current).toBeUndefined()
  })

  it('should handle multiple consecutive rerenders', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 1 },
    })

    expect(result.current).toBeUndefined()

    rerender({ value: 2 })
    expect(result.current).toBe(1)

    rerender({ value: 3 })
    expect(result.current).toBe(2)

    rerender({ value: 4 })
    expect(result.current).toBe(3)

    rerender({ value: 5 })
    expect(result.current).toBe(4)
  })

  it('should handle same value rerenders', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 'constant' },
    })

    expect(result.current).toBeUndefined()

    rerender({ value: 'constant' })

    expect(result.current).toBe('constant')

    rerender({ value: 'constant' })

    expect(result.current).toBe('constant')
  })

  it('should work with complex nested objects', () => {
    const object1 = { user: { name: 'John', age: 30 }, settings: { theme: 'dark' } }
    const object2 = { user: { name: 'Jane', age: 25 }, settings: { theme: 'light' } }

    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: object1 },
    })

    expect(result.current).toBeUndefined()

    rerender({ value: object2 })

    expect(result.current).toBe(object1)
    expect(result.current).toEqual({ user: { name: 'John', age: 30 }, settings: { theme: 'dark' } })
  })
})

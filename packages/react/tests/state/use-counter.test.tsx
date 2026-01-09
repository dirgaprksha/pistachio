import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useCounter } from '../../src/state'

describe('useCounter', () => {
  it('should initialize with default value 0', () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current[0]).toBe(0)
  })

  it('should initialize with provided value', () => {
    const { result } = renderHook(() => useCounter(10))

    expect(result.current[0]).toBe(10)
  })

  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter(0))

    act(() => result.current[1].increment())

    expect(result.current[0]).toBe(1)
  })

  it('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(5))

    act(() => result.current[1].decrement())

    expect(result.current[0]).toBe(4)
  })

  it('should set counter to specific value', () => {
    const { result } = renderHook(() => useCounter(0))

    act(() => result.current[1].set(42))

    expect(result.current[0]).toBe(42)
  })

  it('should reset counter to initial value', () => {
    const { result } = renderHook(() => useCounter(10))

    act(() => {
      result.current[1].increment()
      result.current[1].increment()
    })

    expect(result.current[0]).toBe(12)

    act(() => {
      result.current[1].reset()
    })

    expect(result.current[0]).toBe(10)
  })

  it('should respect min bound', () => {
    const { result } = renderHook(() => useCounter(5, { min: 0, max: 10 }))

    act(() => result.current[1].set(-5))

    expect(result.current[0]).toBe(0)
  })

  it('should respect max bound', () => {
    const { result } = renderHook(() => useCounter(5, { min: 0, max: 10 }))

    act(() => result.current[1].set(15))

    expect(result.current[0]).toBe(10)
  })

  it('should clamp increment at max bound', () => {
    const { result } = renderHook(() => useCounter(9, { min: 0, max: 10 }))

    act(() => {
      result.current[1].increment()
      result.current[1].increment()
      result.current[1].increment()
    })

    expect(result.current[0]).toBe(10)
  })

  it('should clamp decrement at min bound', () => {
    const { result } = renderHook(() => useCounter(1, { min: 0, max: 10 }))

    act(() => {
      result.current[1].decrement()
      result.current[1].decrement()
      result.current[1].decrement()
    })

    expect(result.current[0]).toBe(0)
  })

  it('should clamp initial value within bounds', () => {
    const { result } = renderHook(() => useCounter(100, { min: 0, max: 10 }))

    expect(result.current[0]).toBe(10)
  })

  it('should clamp reset value within bounds', () => {
    const { result } = renderHook(() => useCounter(100, { min: 0, max: 10 }))

    act(() => result.current[1].set(5))

    expect(result.current[0]).toBe(5)

    act(() => result.current[1].reset())

    expect(result.current[0]).toBe(10)
  })

  it('should work with negative bounds', () => {
    const { result } = renderHook(() => useCounter(-5, { min: -10, max: -1 }))

    expect(result.current[0]).toBe(-5)

    act(() => result.current[1].decrement())

    expect(result.current[0]).toBe(-6)

    act(() => {
      result.current[1].increment()
      result.current[1].increment()
      result.current[1].increment()
      result.current[1].increment()
      result.current[1].increment()
    })

    expect(result.current[0]).toBe(-1)
  })

  it('should work without bounds', () => {
    const { result } = renderHook(() => useCounter(0))

    act(() => result.current[1].set(1000000))

    expect(result.current[0]).toBe(1000000)

    act(() => result.current[1].set(-1000000))

    expect(result.current[0]).toBe(-1000000)
  })
})

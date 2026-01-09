import { describe, it, expect } from 'vitest'
import { useCounter } from '../../src/state'

describe('useCounter', () => {
  it('should initialize with default value 0', () => {
    const { count } = useCounter()

    expect(count.value).toBe(0)
  })

  it('should initialize with provided value', () => {
    const { count } = useCounter(10)

    expect(count.value).toBe(10)
  })

  it('should increment counter', () => {
    const { count, increment } = useCounter(0)

    increment()

    expect(count.value).toBe(1)
  })

  it('should decrement counter', () => {
    const { count, decrement } = useCounter(5)

    decrement()

    expect(count.value).toBe(4)
  })

  it('should set counter to specific value', () => {
    const { count, set } = useCounter(0)

    set(42)

    expect(count.value).toBe(42)
  })

  it('should reset counter to initial value', () => {
    const { count, increment, reset } = useCounter(10)

    increment()
    increment()

    expect(count.value).toBe(12)

    reset()

    expect(count.value).toBe(10)
  })

  it('should respect min bound', () => {
    const { count, set } = useCounter(5, { min: 0, max: 10 })

    set(-5)

    expect(count.value).toBe(0)
  })

  it('should respect max bound', () => {
    const { count, set } = useCounter(5, { min: 0, max: 10 })

    set(15)

    expect(count.value).toBe(10)
  })

  it('should clamp increment at max bound', () => {
    const { count, increment } = useCounter(9, { min: 0, max: 10 })

    increment()
    increment()
    increment()

    expect(count.value).toBe(10)
  })

  it('should clamp decrement at min bound', () => {
    const { count, decrement } = useCounter(1, { min: 0, max: 10 })

    decrement()
    decrement()
    decrement()

    expect(count.value).toBe(0)
  })

  it('should clamp initial value within bounds', () => {
    const { count } = useCounter(100, { min: 0, max: 10 })

    expect(count.value).toBe(10)
  })

  it('should clamp reset value within bounds', () => {
    const { count, set, reset } = useCounter(100, { min: 0, max: 10 })

    set(5)

    expect(count.value).toBe(5)

    reset()

    expect(count.value).toBe(10)
  })

  it('should work with negative bounds', () => {
    const { count, decrement, increment } = useCounter(-5, { min: -10, max: -1 })

    expect(count.value).toBe(-5)

    decrement()

    expect(count.value).toBe(-6)

    increment()
    increment()
    increment()
    increment()
    increment()

    expect(count.value).toBe(-1)
  })

  it('should work without bounds', () => {
    const { count, set } = useCounter(0)

    set(1000000)

    expect(count.value).toBe(1000000)

    set(-1000000)

    expect(count.value).toBe(-1000000)
  })

  it('should be reactive', () => {
    const { count, increment } = useCounter(0)

    const values: number[] = []
    values.push(count.value)

    increment()
    values.push(count.value)

    increment()
    values.push(count.value)

    expect(values).toEqual([0, 1, 2])
  })
})

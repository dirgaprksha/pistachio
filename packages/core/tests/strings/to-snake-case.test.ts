import { describe, it, expect } from 'vitest'
import { toSnakeCase } from '../../src/strings'

describe('toSnakeCase', () => {
  it('should convert camel case to snake case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world')
    expect(toSnakeCase('fooBarBaz')).toBe('foo_bar_baz')
  })

  it('should convert pascal case to snake case', () => {
    expect(toSnakeCase('HelloWorld')).toBe('hello_world')
    expect(toSnakeCase('FooBarBaz')).toBe('foo_bar_baz')
  })

  it('should convert kebab case to snake case', () => {
    expect(toSnakeCase('hello-world')).toBe('hello_world')
    expect(toSnakeCase('foo-bar-baz')).toBe('foo_bar_baz')
  })

  it('should convert space separated to snake case', () => {
    expect(toSnakeCase('hello world')).toBe('hello_world')
    expect(toSnakeCase('foo bar baz')).toBe('foo_bar_baz')
  })

  it('should handle already snake case strings', () => {
    expect(toSnakeCase('hello_world')).toBe('hello_world')
    expect(toSnakeCase('foo_bar_baz')).toBe('foo_bar_baz')
  })

  it('should handle single words', () => {
    expect(toSnakeCase('hello')).toBe('hello')
    expect(toSnakeCase('HELLO')).toBe('hello')
  })

  it('should handle empty strings', () => {
    expect(toSnakeCase('')).toBe('')
  })

  it('should handle uppercase strings', () => {
    expect(toSnakeCase('HELLO WORLD')).toBe('hello_world')
  })
})

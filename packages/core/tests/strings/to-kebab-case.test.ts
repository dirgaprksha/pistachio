import { describe, it, expect } from 'vitest'
import { toKebabCase } from '../../src/strings'

describe('toKebabCase', () => {
  it('should convert camel case to kebab case', () => {
    expect(toKebabCase('helloWorld')).toBe('hello-world')
    expect(toKebabCase('fooBarBaz')).toBe('foo-bar-baz')
  })

  it('should convert pascal case to kebab case', () => {
    expect(toKebabCase('HelloWorld')).toBe('hello-world')
    expect(toKebabCase('FooBarBaz')).toBe('foo-bar-baz')
  })

  it('should convert snake case to kebab case', () => {
    expect(toKebabCase('hello_world')).toBe('hello-world')
    expect(toKebabCase('foo_bar_baz')).toBe('foo-bar-baz')
  })

  it('should convert space separated to kebab case', () => {
    expect(toKebabCase('hello world')).toBe('hello-world')
    expect(toKebabCase('foo bar baz')).toBe('foo-bar-baz')
  })

  it('should handle already kebab case strings', () => {
    expect(toKebabCase('hello-world')).toBe('hello-world')
    expect(toKebabCase('foo-bar-baz')).toBe('foo-bar-baz')
  })

  it('should handle single words', () => {
    expect(toKebabCase('hello')).toBe('hello')
    expect(toKebabCase('HELLO')).toBe('hello')
  })

  it('should handle empty strings', () => {
    expect(toKebabCase('')).toBe('')
  })

  it('should handle uppercase strings', () => {
    expect(toKebabCase('HELLO WORLD')).toBe('hello-world')
  })
})

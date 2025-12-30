import { describe, it, expect } from 'vitest'
import { toCamelCase } from '../../src/strings'

describe('toCamelCase', () => {
  it('should convert kebab case to camel case', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld')
    expect(toCamelCase('foo-bar-baz')).toBe('fooBarBaz')
  })

  it('should convert snake case to camel case', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld')
    expect(toCamelCase('foo_bar_baz')).toBe('fooBarBaz')
  })

  it('should convert space separated to camel case', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld')
    expect(toCamelCase('foo bar baz')).toBe('fooBarBaz')
  })

  it('should convert PascalCase to camel case', () => {
    expect(toCamelCase('HelloWorld')).toBe('helloWorld')
    expect(toCamelCase('FooBarBaz')).toBe('fooBarBaz')
  })

  it('should handle already camel case strings', () => {
    expect(toCamelCase('helloWorld')).toBe('helloWorld')
    expect(toCamelCase('fooBarBaz')).toBe('fooBarBaz')
  })

  it('should handle single words', () => {
    expect(toCamelCase('hello')).toBe('hello')
    expect(toCamelCase('HELLO')).toBe('hELLO')
  })

  it('should handle empty strings', () => {
    expect(toCamelCase('')).toBe('')
  })

  it('should handle mixed separators', () => {
    expect(toCamelCase('hello-world_foo bar')).toBe('helloWorldFooBar')
  })

  it('should handle trailing separators', () => {
    expect(toCamelCase('hello-')).toBe('hello')
    expect(toCamelCase('foo_')).toBe('foo')
    expect(toCamelCase('bar ')).toBe('bar')
  })
})

import { describe, it, expect } from 'vitest'
import { toPascalCase } from '../../src/strings'

describe('toPascalCase', () => {
  it('should convert kebab case to pascal case', () => {
    expect(toPascalCase('hello-world')).toBe('HelloWorld')
    expect(toPascalCase('foo-bar-baz')).toBe('FooBarBaz')
  })

  it('should convert snake case to pascal case', () => {
    expect(toPascalCase('hello_world')).toBe('HelloWorld')
    expect(toPascalCase('foo_bar_baz')).toBe('FooBarBaz')
  })

  it('should convert space separated to pascal case', () => {
    expect(toPascalCase('hello world')).toBe('HelloWorld')
    expect(toPascalCase('foo bar baz')).toBe('FooBarBaz')
  })

  it('should handle already pascal case strings', () => {
    expect(toPascalCase('HelloWorld')).toBe('HelloWorld')
    expect(toPascalCase('FooBarBaz')).toBe('FooBarBaz')
  })

  it('should convert camel case to pascal case', () => {
    expect(toPascalCase('helloWorld')).toBe('HelloWorld')
    expect(toPascalCase('fooBarBaz')).toBe('FooBarBaz')
  })

  it('should handle single words', () => {
    expect(toPascalCase('hello')).toBe('Hello')
    expect(toPascalCase('HELLO')).toBe('HELLO')
  })

  it('should handle empty strings', () => {
    expect(toPascalCase('')).toBe('')
  })

  it('should handle mixed separators', () => {
    expect(toPascalCase('hello-world_foo bar')).toBe('HelloWorldFooBar')
  })

  it('should handle trailing separators', () => {
    expect(toPascalCase('hello-')).toBe('Hello')
    expect(toPascalCase('foo_')).toBe('Foo')
    expect(toPascalCase('bar ')).toBe('Bar')
  })
})

import { describe, it, expect } from 'vitest'
import { toTitleCase } from '../../src/strings'

describe('toTitleCase', () => {
  it('should convert space separated to title case', () => {
    expect(toTitleCase('hello world')).toBe('Hello World')
    expect(toTitleCase('foo bar baz')).toBe('Foo Bar Baz')
    expect(toTitleCase('the quick brown fox')).toBe('The Quick Brown Fox')
  })

  it('should convert upper case to title case', () => {
    expect(toTitleCase('HELLO WORLD')).toBe('Hello World')
    expect(toTitleCase('HELLO')).toBe('Hello')
  })

  it('should handle kebab case', () => {
    expect(toTitleCase('hello-world')).toBe('Hello-World')
    expect(toTitleCase('foo-bar-baz')).toBe('Foo-Bar-Baz')
    expect(toTitleCase('the-quick-brown-fox')).toBe('The-Quick-Brown-Fox')
  })

  it('should handle snake case', () => {
    expect(toTitleCase('hello_world')).toBe('Hello_World')
    expect(toTitleCase('foo_bar_baz')).toBe('Foo_Bar_Baz')
    expect(toTitleCase('the_quick_brown_fox')).toBe('The_Quick_Brown_Fox')
  })

  it('should handle camel case', () => {
    expect(toTitleCase('helloWorld')).toBe('Helloworld')
    expect(toTitleCase('fooBarBaz')).toBe('Foobarbaz')
  })

  it('should handle single words', () => {
    expect(toTitleCase('hello')).toBe('Hello')
    expect(toTitleCase('a')).toBe('A')
  })

  it('should handle empty strings', () => {
    expect(toTitleCase('')).toBe('')
  })
})

import { describe, it, expect } from 'vitest'
import { toSlug } from '../../src/strings'

describe('toSlug', () => {
  it('should convert space separated to slug', () => {
    expect(toSlug('Hello World')).toBe('hello-world')
    expect(toSlug('Foo Bar Baz')).toBe('foo-bar-baz')
    expect(toSlug('HELLO WORLD')).toBe('hello-world')
  })

  it('should handle camel case and paccal case', () => {
    expect(toSlug('helloWorld')).toBe('helloworld')
    expect(toSlug('fooBarBaz')).toBe('foobarbaz')
  })

  it('should convert snake case to slug', () => {
    expect(toSlug('hello_world')).toBe('hello-world')
    expect(toSlug('foo_bar_baz')).toBe('foo-bar-baz')
  })

  it('should handle already slug format', () => {
    expect(toSlug('hello-world')).toBe('hello-world')
    expect(toSlug('foo-bar-baz')).toBe('foo-bar-baz')
  })

  it('should handle single words', () => {
    expect(toSlug('hello')).toBe('hello')
    expect(toSlug('HELLO')).toBe('hello')
  })

  it('should handle empty strings', () => {
    expect(toSlug('')).toBe('')
  })

  it('should remove special characters', () => {
    expect(toSlug('Hello World!')).toBe('hello-world')
    expect(toSlug('Hello@World#2024')).toBe('helloworld2024')
  })

  it('should handle extra whitespace', () => {
    expect(toSlug('  hello  world  ')).toBe('hello-world')
  })

  it('should handle multiple consecutive separators', () => {
    expect(toSlug('hello---world')).toBe('hello-world')
    expect(toSlug('---hello---')).toBe('hello')
    expect(toSlug('___hello___')).toBe('hello')
  })

  it('should handle mixed separators', () => {
    expect(toSlug('hello_world-foo bar')).toBe('hello-world-foo-bar')
  })
})

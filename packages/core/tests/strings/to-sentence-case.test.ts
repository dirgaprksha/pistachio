import { describe, it, expect } from 'vitest'
import { toSentenceCase } from '../../src/strings'

describe('toSentenceCase', () => {
  it('should convert lower case to sentence case', () => {
    expect(toSentenceCase('hello world')).toBe('Hello world')
    expect(toSentenceCase('hello')).toBe('Hello')
  })

  it('should convert upper case to sentence case', () => {
    expect(toSentenceCase('HELLO WORLD')).toBe('Hello world')
    expect(toSentenceCase('HELLO')).toBe('Hello')
  })

  it('should handle already sentence case strings', () => {
    expect(toSentenceCase('Hello world')).toBe('Hello world')
  })

  it('should handle mixed case strings', () => {
    expect(toSentenceCase('hELLo WoRLd')).toBe('Hello world')
  })

  it('should handle single characters', () => {
    expect(toSentenceCase('a')).toBe('A')
    expect(toSentenceCase('Z')).toBe('Z')
  })

  it('should handle empty strings', () => {
    expect(toSentenceCase('')).toBe('')
  })
})

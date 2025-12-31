import { describe, it, expect } from 'vitest'
import { toUpperCase } from '../../src/strings'

describe('toUpperCase', () => {
  it('should convert lower case to upper case', () => {
    expect(toUpperCase('hello')).toBe('HELLO')
    expect(toUpperCase('world')).toBe('WORLD')
  })

  it('should handle already upper case strings', () => {
    expect(toUpperCase('HELLO')).toBe('HELLO')
  })

  it('should handle mixed case strings', () => {
    expect(toUpperCase('HeLLo WoRLd')).toBe('HELLO WORLD')
  })

  it('should handle empty strings', () => {
    expect(toUpperCase('')).toBe('')
  })

  it('should preserve special characters and numbers', () => {
    expect(toUpperCase('hello-world_123')).toBe('HELLO-WORLD_123')
  })
})

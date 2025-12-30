import { describe, it, expect } from 'vitest'
import { toLowerCase } from '../../src/strings'

describe('toLowerCase', () => {
  it('should convert uppercase to lowercase', () => {
    expect(toLowerCase('HELLO')).toBe('hello')
    expect(toLowerCase('WORLD')).toBe('world')
  })

  it('should handle already lowercase strings', () => {
    expect(toLowerCase('hello')).toBe('hello')
  })

  it('should handle mixed case strings', () => {
    expect(toLowerCase('HeLLo WoRLd')).toBe('hello world')
  })

  it('should handle empty strings', () => {
    expect(toLowerCase('')).toBe('')
  })

  it('should preserve special characters and numbers', () => {
    expect(toLowerCase('HELLO-WORLD_123')).toBe('hello-world_123')
  })
})

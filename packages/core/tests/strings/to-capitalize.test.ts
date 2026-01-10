import { describe, it, expect } from 'vitest'
import { toCapitalize } from '../../src/strings'

describe('toCapitalize', () => {
  it('should capitalize lower case strings', () => {
    expect(toCapitalize('hello')).toBe('Hello')
    expect(toCapitalize('world')).toBe('World')
  })

  it('should handle already capitalized strings', () => {
    expect(toCapitalize('Hello')).toBe('Hello')
    expect(toCapitalize('Z')).toBe('Z')
  })

  it('should handle single characters', () => {
    expect(toCapitalize('a')).toBe('A')
    expect(toCapitalize('Z')).toBe('Z')
  })

  it('should handle empty strings', () => {
    expect(toCapitalize('')).toBe('')
  })

  it('should only capitalize first character', () => {
    expect(toCapitalize('hello world')).toBe('Hello world')
    expect(toCapitalize('hELLO')).toBe('Hello')
  })
})

# @pistachiojs/core

A TypeScript utility library with pure functions for common programming tasks. Provides clean, functional utilities that work in any JavaScript environment.

[![npm version](https://img.shields.io/npm/v/@pistachiojs/core)](https://www.npmjs.com/package/@pistachiojs/core)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](../../coverage)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Key features

- **Full type safety** - TypeScript-first with complete inference
- **Framework agnostic** - Compatible with any JavaScript framework or library
- **Zero dependencies** - No external dependencies
- **Tree shakeable** - Modular imports for minimal bundle size
- **Well tested** - Comprehensive test coverage

## Installation

```bash
# npm
npm install @pistachiojs/core

# pnpm
pnpm add @pistachiojs/core

# yarn
yarn add @pistachiojs/core
```

## Usage

### ESM (ES Modules)

```javascript
import { isArray, toCamelCase } from '@pistachiojs/core'

// Type checking
isArray([1, 2, 3]) // true
isArray('hello') // false

// String transformation
toCamelCase('hello-world') // 'helloWorld'
```

### CommonJS

```javascript
const { isArray, toCamelCase } = require('@pistachiojs/core')

// Type checking
isArray([1, 2, 3]) // true
isArray('hello') // false

// String transformation
toCamelCase('hello-world') // 'helloWorld'
```

## Type safety

This package is written in TypeScript and includes type definitions out of the box.

```typescript
import { map, isString } from '@pistachiojs/core'

// Full type inference
const numbers: number[] = [1, 2, 3]
const doubled = map(numbers, (n) => n * 2) // number[]

// Type guards narrow types
function process(value: unknown) {
  if (isString(value)) {
    // value is now typed as string
    return value.toUpperCase()
  }
}
```

## License

MIT © [Dirga Prakesha](https://github.com/dirgaprksha)

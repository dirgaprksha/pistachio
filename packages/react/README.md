# @pistachiojs/react

A collection React hooks library for reactive programming tasks. Built on top of @pistachiojs/core packages.

[![npm version](https://img.shields.io/npm/v/@pistachiojs/react)](https://www.npmjs.com/package/@pistachiojs/react)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](../../coverage)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Key features

- **Full type safety** - TypeScript-first with complete inference
- **React optimized** - Built specifically for React 17+
- **Tree shakeable** - Modular imports for minimal bundle size
- **Well tested** - Comprehensive test coverage

## Installation

```bash
# npm
npm install @pistachiojs/core @pistachiojs/react

# pnpm
pnpm add @pistachiojs/core @pistachiojs/react

# yarn
yarn add @pistachiojs/core @pistachiojs/react
```

## Usage

```jsx
import { useCounter } from '@pistachiojs/react'

function Counter() {
  const [count, handlers] = useCounter(0, {
    min: 0,
    max: 10,
  })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handlers.increment}>+</button>
      <button onClick={handlers.decrement}>-</button>
      <button onClick={() => handlers.set(5)}>Set to 5</button>
      <button onClick={handlers.reset}>Reset</button>
    </div>
  )
}
```

## Type safety

This package is written in TypeScript and includes type definitions out of the box.

```typescript
import { useCounter } from '@pistachiojs/react'

function TypeSafeCounter() {
  // Full type inference
  const [count, handlers] = useCounter(0, { min: 0, max: 100 })
  // count: number
  // handlers: UseCounterHandler

  // All handlers are fully typed
  handlers.increment() // () => void
  handlers.set(50) // (value: number) => void
}
```

## License

MIT © [Dirga Prakesha](https://github.com/dirgaprksha)

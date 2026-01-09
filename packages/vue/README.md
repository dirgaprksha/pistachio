# @pistachiojs/vue

Vue composables built on top of @pistachiojs/core for reactive programming tasks.

[![npm version](https://img.shields.io/npm/v/@pistachiojs/vue)](https://www.npmjs.com/package/@pistachiojs/vue)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](../../coverage)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Key features

- **Full type safety** - TypeScript-first with complete inference
- **Vue specific adapters** - Designed for Vue 3+
- **Tree shakeable** - Modular imports for minimal bundle size
- **Well tested** - Comprehensive test coverage

## Installation

```bash
# npm
npm install @pistachiojs/core @pistachiojs/vue

# pnpm
pnpm add @pistachiojs/core @pistachiojs/vue

# yarn
yarn add @pistachiojs/core @pistachiojs/vue
```

## Usage

```vue
<script setup lang="ts">
import { useCounter } from '@pistachiojs/vue'

const { count, increment, decrement, set, reset } = useCounter(0, {
  min: 0,
  max: 10,
})
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="() => set(5)">Set to 5</button>
    <button @click="reset">Reset</button>
  </div>
</template>
```

## Type safety

This package is written in TypeScript and includes type definitions out of the box.

```typescript
import { useCounter } from '@pistachiojs/vue'

// full type inference
const { count, increment, decrement, set, reset } = useCounter(0, { min: 0, max: 100 })
// count: Ref<number>
// increment: () => void
// decrement: () => void
// set: (value: number) => void
// reset: () => void
```

## License

MIT © [Dirga Prakesha](https://github.com/dirgaprksha)

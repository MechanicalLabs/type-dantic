# type-dantic

[![License](https://img.shields.io/github/license/MechanicalLabs/type-dantic?style=flat-square)](https://github.com/MechanicalLabs/type-dantic/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?style=flat-square)](https://www.typescriptlang.org/)

**Opinionated TypeScript template with strictest settings, zero compromises.**

`type-dantic` is a batteries-included starter template for TypeScript projects that value type safety, code quality, and minimal tooling overhead. It ships with the most pedantic compiler flags, Biome for linting/formatting, Knip for dead code detection, and pre-commit hooks — so you can focus on writing correct code from day one.

---

## Features

- **Maximal Strictness:** Every TypeScript strict flag enabled. `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`, `noUnusedLocals`/`noUnusedParameters` — nothing is left to chance.
- **Biome:** Single-tool formatting and linting. No ESLint + Prettier dance.
- **Knip:** Automatic dead file and export detection to keep your codebase lean.
- **Pre-commit Hooks:** Client-side hooks that enforce linting and formatting before every commit.
- **Dependabot:** Automated dependency updates out of the box.

## Quick Start

```bash
# Scaffold a new project
bun create type-dantic my-project
cd my-project

# Install dependencies
bun install

# Verify everything is clean
bun run verify
```

## Structure

```
src/
├── index.ts        # Entry point
└── index.test.ts   # Test scaffold
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run lint` | Lint with Biome |
| `bun run format` | Format with Biome |
| `bun run knip` | Detect dead code |
| `bun run verify` | Lint + Knip + Tests |
| `bun run start` | Run the entry point |

## Philosophy

TypeScript's strict mode is already a strong baseline, but the defaults still leave gaps. `type-dantic` closes them — every compiler flag that eliminates a class of bugs is enabled, and unsound patterns like `any`-returning `fetch`, unhandled `null`, and implicit `undefined` are caught at compile time.

This is the template I'd want to reach for when starting anything serious. It's not for everyone — if you want fast iteration and loose types, this isn't it. But if you believe the compiler is your best code reviewer, this is home.

## Licence

This project is licensed under **MIT** License.

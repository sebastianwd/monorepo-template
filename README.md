# Monorepo Starter

Aimed to demonstrate how to use the following tools and common patterns:

- Shared eslint, trpc and ui packages between Tanstack Start and Next.js apps
- Shared Tailwind CSS v4 **dynamic themes** with full SSR support
- shadcn UI components
- legend state for state management integrated with Tanstack Query for optimistic updates

Made these examples because I think they will save a lot of time for future projects.

## Commands

### Install

```
pnpm i
```

### Run

- Tanstack Start:

```
pnpm -F tanstack dev
```

- Next.js: Work in progress

## What's inside?

### Apps and Packages

- `apps/tanstack`: a [Tanstack Start](https://tanstack.com/start/latest) app
- `apps/next`: a [Next.js](https://nextjs.org/) app
- `packages/ui`: a shadcn based React component library shared by both `tanstack` and `next` applications
- `packages/trpc`: a shared trpc package

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

```
pnpm dev
```

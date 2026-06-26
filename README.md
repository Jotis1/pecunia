# @jotis1/template-nextjs

Opinionated Next.js starter with the stack I actually use. No fluff, no unused dependencies, no opinions imposed by a tutorial from 2022.

## Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Runtime & Package Manager | [Bun](https://bun.sh/) |
| Language | TypeScript (strict) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + [Untitled UI](https://www.untitledui.com/) tokens |
| Linter & Formatter | [Biome](https://biomejs.dev/) |

## Getting started

```bash
git clone https://github.com/jotis1/template-nextjs my-app
cd my-app
bun install
bun dev
```

## Project structure

```
src/
├── app/                  # App Router — routes, layouts, pages
│   ├── layout.tsx
│   └── page.tsx
├── hooks/                # Custom React hooks
│   ├── use-breakpoint.ts
│   ├── use-clipboard.ts
│   └── use-resize-observer.ts
├── lib/                  # Config and shared logic
│   └── fonts.ts
├── providers/            # React context providers
│   ├── route-provider.tsx
│   └── theme-provider.tsx
├── styles/               # Global styles and design tokens
│   ├── globals.css
│   └── theme.css         # Untitled UI token definitions
└── utils/                # Pure utility functions
    ├── cx.ts             # Class name composition
    └── is-react-component.ts
```

## Design system

Styles are built on top of [Untitled UI](https://www.untitledui.com/)'s design token system. The `theme.css` file contains all token definitions (colors, spacing, typography, shadows). Tailwind is configured to consume those tokens directly — no arbitrary values, no magic numbers.

## Included hooks

| Hook | Purpose |
|---|---|
| `useBreakpoint` | Reactive current breakpoint |
| `useClipboard` | Copy to clipboard with reset |
| `useResizeObserver` | Element size tracking |

## Scripts

```bash
bun dev        # Development server
bun build      # Production build
bun start      # Production server
bun lint       # Biome lint + format check
bun format     # Biome format (write)
```

## What this template does not include

Intentionally absent so you only add what you need:

- No auth layer (add [Better Auth](https://www.better-auth.com/) if needed)
- No database/ORM (add [Prisma](https://www.prisma.io/) if needed)
- No component library (the design system is token-based, not component-based)
- No state management (add [Zustand](https://zustand-demo.pmnd.rs/) if needed)

## License

MIT
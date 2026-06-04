# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Dev server (Next.js, port 3000)
npm run build    # Production build
npm run lint     # ESLint via next's config
```

No test suite is configured.

## Architecture

Single-page portfolio: **Next.js 15+ App Router** + **TypeScript** + **Tailwind CSS v4** + **Framer Motion**.

All content (bio, skills, experience, projects, education, contact) lives in `src/data/content.json`, typed by `src/types/content.ts`. Section components import directly from JSON — no API, no server fetches.

`src/app/page.tsx` stacks sections in order: Hero → About → Skills → Experience → Projects → Education → Contact → Colophon. Layout chrome (cursor, SVG filters, paper texture, section indicator) is mounted once in `src/app/layout.tsx`.

Tailwind v4 is configured via CSS `@theme` in `src/app/globals.css` — no `tailwind.config.*`. Tokens: `paper` (#f4efe4), `ink` (#111009), `terracotta` (#c8381a); fonts `--font-playfair` / `--font-cormorant` / `--font-dm-mono`. Use `cn()` from `src/lib/utils.ts` for class composition.

## Design constraints

- `h1`/`h2`/`h3`/`.hollow-text` have `filter: url(#ink-bleed)` — SVG filter injected by `GlobalFilters`. Don't inline-override it.
- Ruled-line background (`div.ruled-background` at `z-0`, opacity 0.08) is intentional — don't remove.
- `prefers-reduced-motion` is handled globally in `globals.css`; Framer Motion animations must respect it.

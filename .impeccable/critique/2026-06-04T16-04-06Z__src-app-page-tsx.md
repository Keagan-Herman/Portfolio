---
target: portfolio homepage
total_score: 25
p0_count: 0
p1_count: 2
timestamp: 2026-06-04T16-04-06Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | SectionIndicator provides scroll position; project links have no default affordance |
| 2 | Match System / Real World | 3 | Editorial vocabulary is distinctive, not confusing |
| 3 | User Control and Freedom | 3 | No trapped flows; external links correctly guarded |
| 4 | Consistency and Standards | 2 | Duplicate footer (ContactSection internal grid + Colophon); hardcoded #ece6d8 escapes tokens |
| 5 | Error Prevention | 3 | Static site; no destructive actions |
| 6 | Recognition Rather Than Recall | 3 | Contact links clear; project CTA hover-only |
| 7 | Flexibility and Efficiency | 2 | No keyboard shortcuts; SectionIndicator likely lacks accessible labels |
| 8 | Aesthetic and Minimalist Design | 3 | Post-polish cleaner; duplicate footer is remaining clutter |
| 9 | Error Recovery | 2 | Static portfolio; dangerouslySetInnerHTML is latent risk |
| 10 | Help and Documentation | 2 | Colophon explains design/stack; appropriate for static portfolio |
| **Total** | | **25/40** | **Acceptable** |

## Anti-Patterns Verdict

**LLM assessment:** The editorial-typographic aesthetic lane (Playfair + Cormorant + DM Mono, ink/paper/terracotta, ruled separators) is in the reflex-reject list. Identity-preservation applies since this is a committed existing brand. Genuine craft decisions (SVG ink-bleed filter, parallax name split, drop cap system) push it above default. Not AI slop, but occupies a saturated lane.

**Deterministic scan:** detect.mjs returned clean (exit 0, zero findings after polish pass).

## Overall Impression

Technically serious and typographically committed — the right register. Two structural problems: duplicate footer rendering at the page bottom, and body text at low opacity failing WCAG AA contrast. Fix those and this is a convincing portfolio.

## What's Working

1. **Parallax name split with ink-bleed filter.** First scroll establishes the brand with a specific technical decision. Not a reflex move.
2. **Light/dark rhythm.** Hero (paper) → About (ink) → Skills (paper) → Experience (parchment) → Projects (paper) → Education (ink) → Contact (paper). Deliberate art direction.
3. **Contact card structure.** Label + detail tiers make the CTA scannable in one glance.

## Priority Issues

**[P1] Duplicate footer**: ContactSection renders an internal colophon grid (Identity/Typefaces/Stack/Colophon columns, lines 97-135) AND page.tsx also renders a separate `<Colophon>` component. Two footer-style blocks render consecutively with overlapping information. Fix: delete the inner colophon div block from ContactSection.tsx lines 97-135.

**[P1] Project entries have no default interaction affordance on mobile/touch**: The arrow and hover tint are hover-only. Touch users see static text rows. Fix: add a persistent "View on GitHub ↗" link visible at rest.

**[P2] Body text at low opacity fails WCAG AA contrast**: `opacity-65` on 1.05rem text ≈3.1:1 (requires 4.5:1). `opacity-55` aside text ≈2.7:1. Fix: raise body/description text to opacity-80+ or use absolute color values.

**[P2] "I don't just close tickets" copy**: "not just X, it's Y" pattern in About headline. Fix: replace with specific outcome-led copy without the negation.

**[P3] text-wrap: balance missing on h2 elements**: Manual `<br />` tags in headings don't adapt to viewport. Fix: add textWrap: balance and remove manual breaks.

## Persona Red Flags

**Marcus (Technical Hiring Manager)**: GitHub buried in bottom bar at equal weight as Email/LinkedIn/Phone. "5 Live Projects Shipped" in ledger can't be verified (only 2 listed). No live demo links visible by default.

**Jordan (Non-Technical Recruiter)**: No availability statement above the fold. "I don't just close tickets" copy may confuse. Editorial masthead not immediately parseable as portfolio.

**Sam (Accessibility)**: SectionIndicator dots likely lack aria-labels. opacity-65 body text fails contrast. dangerouslySetInnerHTML in EducationSection.

## Minor Observations

- `bg-[#ece6d8]` hardcoded in multiple files; should be a token.
- Hero masthead fallback "JAN 2025" is incorrect (current year 2026).
- `{...(wrapperProps as any)}` in ProjectsSection suppresses TypeScript safety.
- ContactSection has h4 labeled "Colophon" creating naming collision with Colophon component.

## Questions to Consider

- "If a recruiter has 30 seconds — what one thing should they leave with? Is it above the fold?"
- "What specific decisions on this page make it yours rather than the genre's?"
- "Does 6rem still read with enough hero weight after the polish cap, or does the About ghost type now compete at the same register?"

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zisomi is a luxury luggage brand website — a single-page React landing page with cinematic animations and a distinctive Breton stripe visual identity. The app lives in `zisomi-website/`.

## Commands

All commands run from `zisomi-website/`:

```bash
cd zisomi-website
npm run dev      # Vite dev server (localhost:5173) with HMR
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # ESLint (flat config, ESLint 9+)
```

No test framework is configured.

## Architecture

**Stack:** React 19 + Vite 8, Tailwind CSS 3.4, GSAP 3 (ScrollTrigger), Lucide React icons. Pure JavaScript — no TypeScript.

**Single-file app:** All components live in `src/App.jsx` (~630 lines). No routing — this is a single-page landing site. Components are defined as functions within the file: `TopUtilityBar`, `Navbar`, `HeroSection`, `ValueBanner`, `BestsellersSection`, `FeatureShuffler`, `FeatureTypewriter`, `FeatureScheduler`, `FeaturesSection`, `Footer`, `MagneticButton`.

**Product images** are in `public/assets/` (Teal, Charcoal, Copper, Sand colorways). Logo at `public/assets/ZisomiLogo.jpeg`.

## Design System

**Colors** (defined in `tailwind.config.js`):
- `primary`: #CF331E (Breton red)
- `accent`: #9cc4df (sky blue)
- `background`: #ede5dd (sand)
- `dark`: #722415 (burgundy)
- `dark-text`: #111111

**Fonts** (loaded via Google Fonts in `index.html`):
- `font-sans` → Inter (body)
- `font-heading` → Plus Jakarta Sans (headings)
- `font-drama` → Playfair Display (serif italic accents)
- `font-mono` → Space Mono

**Custom CSS patterns** in `index.css`: `.bg-breton-stripes` and `.bg-breton-stripes-offset` (red/white 20px bands). Global noise overlay via SVG `feTurbulence` filter in `index.html`.

## Animation Patterns

All GSAP animations must use `gsap.context()` inside `useEffect` and return `ctx.revert()` for cleanup. Three main patterns:

1. **Entrance** — fade-up with `y: 30-150, opacity: 0→1`
2. **Floating** — continuous `yoyo: true, repeat: -1` with `Sine.inOut`
3. **Sequence** — `gsap.timeline({ repeat: -1 })` with staggered children

**MagneticButton** uses `scale(1.03)` hover with a sliding background `<span>` overlay.

## Design Reference

`website_designer_prompt.md` contains the full cinematic landing page design system with aesthetic presets and component architecture specs. `zisomi_brandguide.pdf` has brand identity guidelines.

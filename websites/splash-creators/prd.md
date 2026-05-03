---
title: Splash Creators — PRD
author: Saam
created: 2026-05-03
status: draft
---

# Splash Creators

## Why this exists
Splash currently pitches creators through a manual sales process — decks, DMs, calls. Saam's goal is a self-serve funnel that converts mid-tier sports creators (50k–100k followers) without requiring a sales touch. This site is that funnel: it needs to explain the value prop, build credibility with real creator success stories, and get an interested creator to submit an application entirely on their own.

## Audience
Primary: mid-tier sports content creators with 50k–100k followers across YouTube, X, Instagram, or podcast platforms. Secondary: larger influencers (100k+) and scrappier community commissioners. All three tiers should feel seen, but the tone is optimized for the mid-tier creator who is serious about monetization but hasn't broken through yet.

## The three pages
1. **Home (index.html)** — Hook the creator on the value prop, explain what Splash is, show game format variety, and surface high-end earning potential. Primary action: click "Apply Now" to reach the application page.
2. **Creator Stories (creator-stories.html)** — Build credibility with real creator case studies (Rick RunGood, KellyInVegas, Ryan Hammer) framed around aspirational growth and earning potential — no exact dollar figures. Primary action: click "Apply Now" after being inspired by peers.
3. **Apply (apply.html)** — Self-serve application form (name, contact info, social links, audience size, sport focus) with a polished JS success state. Also includes a short FAQ to address objections. Primary action: submit the application.

## Must-haves
- Hero headline: "Engage your community running real money fantasy contests and earn as you grow!"
- Messaging that creators earn a cut on **every contest they run** — not just when they bring in new users. This is a key differentiator and must be prominent on the Home page.
- Creator success stories with aspirational earnings framing (no exact dollar amounts)
- Application form with name, email, social link(s), estimated audience size, primary sport — with a success state on submit
- Splash brand colors pulled from splashsports.com CSS

## Won't-haves
- Exact creator earnings numbers
- Real form backend or data persistence (success state only for now)
- Login or authentication
- Pricing / tier breakdown
- Post-acceptance onboarding funnel (scoped for a future build cycle)

## Design direction
- **Theme:** Dark / Modern Tech — sports-forward SaaS feel matching splashsports.com
- **Palette:**
  - `--color-bg: #131416` (near-black base)
  - `--color-surface: #1a1c1e` (card / section surface)
  - `--color-surface-2: #26292c` (elevated card)
  - `--color-accent: #27c4d4` (teal — primary accent)
  - `--color-accent-bright: #4bebe2` (bright cyan — highlights)
  - `--color-cta: #2d62ff` (electric blue — CTA buttons)
  - `--color-pop: #cc5afc` (purple — secondary highlights)
  - `--color-text: #ffffff`
  - `--color-text-muted: #94a3b8`
- **Type / mood:** Sans-serif (Inter or system-ui), bold hero headings, clean body text
- **Mobile:** Full mobile-first responsive — big tap targets, single-column stacks at 360px

## Success criteria
- [ ] All three pages load in a browser.
- [ ] Dynamic nav highlights the current page.
- [ ] Passes a simple a11y pass (semantic HTML, alt text, contrast).
- [ ] Content feels intentional, not placeholder.
- [ ] Application form shows polished success state on submit.
- [ ] No exact earnings figures anywhere on the site.

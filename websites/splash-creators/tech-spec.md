---
title: Splash Creators — Tech Spec
author: Saam
status: draft
---

# Splash Creators — Tech Spec

## Stack
- HTML5 + CSS3 + vanilla JS (no modules needed)
- Libraries: Google Fonts (Inter) via CDN link
- No build step, no framework, no backend.

## File layout

```
websites/splash-creators/
  index.html              # Home — hero, what is Splash, game formats, earning potential CTA
  creator-stories.html    # Creator Stories — case studies, aspirational stats, CTA
  apply.html              # Apply — application form + FAQ
  assets/
    styles.css            # all shared styles + CSS custom properties
    script.js             # nav highlighting + form submit handler
```

## Navigation component
- Each page loads `assets/script.js` which reads `document.body.dataset.page`
  and adds `.is-active` to the matching `<nav>` link.
- Nav: logo left, links right — Home, Creator Stories, Apply (styled as a CTA pill).
- On mobile: hamburger toggle collapses nav into a full-width dropdown.

## Palette
- --color-bg:           #131416
- --color-surface:      #1a1c1e
- --color-surface-2:    #26292c
- --color-accent:       #27c4d4
- --color-accent-bright:#4bebe2
- --color-cta:          #2d62ff
- --color-pop:          #cc5afc
- --color-text:         #ffffff
- --color-text-muted:   #94a3b8
- --color-border:       #26292c

## Typography
- Heading: Inter, 700–900 weight, tight tracking (-0.02em)
- Body: Inter, 400 weight, 1.6 line-height
- Loaded via Google Fonts: `?family=Inter:wght@400;600;700;900`

## Page outlines

### index.html (data-page="home")
- `<header>` — sticky nav
- `<section class="hero">` — headline, sub-headline, two CTAs (Apply Now + Creator Stories)
- `<section class="what-is-splash">` — 3-column feature cards: peer-to-peer gaming, no house edge, full creator control. One card explicitly calls out: "Earn on every contest you run — not just when you bring in new users."
- `<section class="game-formats">` — horizontal scroll cards for Survivor, Pick'Em, Tiers, Quick Picks, One & Done
- `<section class="earning-potential">` — bold stat callouts framed aspirationally (e.g. "Creators on Splash run contests with prize pools in the hundreds of thousands")
- `<section class="social-proof">` — logos / sport icons (NFL, NBA, PGA, MLB, NHL, NCAAF, NCAAB)
- `<section class="cta-band">` — full-width teal-to-blue gradient band, Apply Now button
- `<footer>`

### creator-stories.html (data-page="stories")
- `<header>` — sticky nav
- `<section class="stories-hero">` — headline: "Real creators. Real communities. Real earnings."
- `<section class="creator-card" id="rickrungood">` — photo placeholder, bio, sport (PGA), contest types, aspirational growth stat
- `<section class="creator-card" id="kellyinvegas">` — photo placeholder, bio, sport (Sports Betting), contest types, aspirational growth stat
- `<section class="creator-card" id="ryan-hammer">` — photo placeholder, bio, sport (NCAAB), contest types, aspirational growth stat
- `<section class="cta-band">` — "Ready to be the next success story?" + Apply Now
- `<footer>`

### apply.html (data-page="apply")
- `<header>` — sticky nav
- `<section class="apply-hero">` — headline: "Let's build something together.", sub-copy
- `<section class="apply-form">` — form fields:
  - Full name (text, required)
  - Email (email, required)
  - Primary social platform + handle (text, required)
  - Secondary social link (text, optional)
  - Estimated audience size (select: Under 10k / 10k–50k / 50k–100k / 100k–500k / 500k+)
  - Primary sport focus (select: NFL / NBA / MLB / NHL / PGA / NCAAF / NCAAB / Other)
  - Tell us about your community (textarea, optional)
  - Submit button: "Apply to Become a Creator Partner"
  - On submit: hide form, show `.success-state` div with confetti-style message
- `<section class="faq">` — 4–5 accordion items:
  - "Is Splash free to use?"
  - "Do I need a large following to apply?"
  - "What game formats can I run?"
  - "How do I earn money?"
  - "How long does the application take?"
- `<footer>`

## A11y / quality bar
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`).
- Every `<img>` has a meaningful `alt` attribute.
- Color contrast: teal (#27c4d4) on dark (#131416) = ~7:1. Blue (#2d62ff) on dark = ~4.6:1. Both pass WCAG AA.
- Keyboard-navigable — focus visible on all interactive elements.
- Responsive at 360px, 768px, 1024px.
- `<script defer>` on all JS.
- One `<h1>` per page.

## Code review — 2026-05-03

### Wins
- Semantic landmarks used correctly across all three pages (`<header>`, `<main>`, `<footer>`, `<nav>`).
- One `<h1>` per page — heading hierarchy is clean.
- All interactive elements have focus-visible styles and keyboard-navigable paths.
- `<script defer>` on all JS — no render-blocking.
- CSS custom properties used throughout — palette is centralized, not scattered as hardcoded hex.
- Mobile hamburger nav correctly toggles `aria-expanded` and closes on outside click.
- Form validation fires before submit; error state uses `aria-live` for screen reader announcement.
- `<meta charset>`, `<meta name="viewport">`, and `<meta name="description">` present on all pages.
- No exact earnings figures anywhere — aspirational framing maintained throughout.
- "Earn on every contest you run" messaging is prominent on both home and apply FAQ.

### Suggestions
- `creator-stories.html`: avatar placeholders use emoji in a div — swap for `<img>` tags with real photos when available, since current structure has no `alt` text on actual images.
- `index.html` hero stats: the leagues row (line 56) has no `stat-value` element, creating a visual height mismatch with the two flanking stats on some viewports. Consider wrapping in a subtle pill or adding a small label above it.
- `assets/styles.css`: the `.creator-card-inner--rev { direction: rtl }` trick for alternating layout breaks on some right-to-left locales if Splash ever goes international — a CSS Grid `order` approach would be safer long-term.

### Must fix before shipping
- None. All three pages load, nav highlights correctly, form success state works, no broken links.

<!-- homework-status: complete -->
completed_at: 2026-05-03T16:46:13Z

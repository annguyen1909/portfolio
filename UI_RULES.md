# UI Design Rules

Modern dark portfolio design system. Apply consistently across all components and pages.

## Palette
- Background: `#09090b` (zinc-950)
- Surface: `#18181b` (zinc-900)
- Surface elevated: `#27272a` (zinc-800)
- Text strong: `#fafafa`
- Text muted: `#a1a1aa`
- Accent: `#3b82f6` (blue-500)
- Border: `rgba(255, 255, 255, 0.08)` — subtle, not harsh

## Typography
- Heading: Montserrat Alternates (600)
- Body: Be Vietnam Pro (400/500)
- Usage:
  - Headings: `font-heading`
  - Body: `font-body`
  - Section labels: `section-label` (uppercase, accent color, letter-spaced)

## Borders & Radius
- Cards, buttons, inputs: `border-radius: 0.5rem`–`0.75rem` (soft rounding)
- Borders: subtle `var(--border)`, hover `var(--border-hover)`
- No heavy box shadows or glassmorphism

## Spacing
- Sections: `section-padding` (py-24 md:py-32)
- Container: `section-container` (max-w-6xl, px-6)
- Generous whitespace between elements

## Component Classes
- `.btn-primary` — accent fill, white text
- `.btn-secondary` — transparent, subtle border
- `.card` — surface bg, subtle border, rounded-xl
- `.input-field` — dark bg, accent focus border
- `.tag` / `.tag-active` — pill-shaped tech/filter labels
- `.section-title` / `.section-subtitle` — consistent section headers

## Animation
- Subtle Framer Motion: opacity + translate, 300–500ms, easeOut
- Hover: border color shifts, slight image scale on cards
- No flashy gradients, blur backgrounds, or glow effects

## Icons
- Lucide icons only. No emoji.

## Prohibited
- Hardcoded `#1b1b1b` / `#4c4c4c` colors — use CSS variables
- Gradient text, shadow-lg, glassmorphism
- Inconsistent fonts across pages

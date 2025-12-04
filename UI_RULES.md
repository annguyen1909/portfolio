# UI Design Rules

These rules define the cohesive, professional, minimal, and distinct design system for the portfolio. Apply consistently across all components and pages.

## Palette
- Background / Surface: `#0B1B2B` (dark-blue-900), `#1F2937` (dark-gray-800)
- Text: `#E5E7EB` (neutral-200), `#9CA3AF` (neutral-400)
- Accent: `#3B82F6` (bright-blue-500)
- Border: `#1D4ED8` (blue-700)
- Notes: Avoid gradients, glassmorphism, blur, random blue-purple mixes.

## Borders & Radius
- Box: `border border-blue-700`
- Button: `rounded-none` (12px)
- Card: `rounded-none` (16px)
- Input: `rounded-none` (8px)
- Rule: Parent container radius >= child radius.

## Typography
- Heading: Montserrat Alternates (600)
- Body: Be Vietnam Pro (400/500)
- Usage:
  - Headings: `font-heading font-semibold`
  - Body: `font-body`

## Icons
- Use Lucide icons or custom SVGs. No emoji.

## Animation
- Subtle, smooth, consistent. Prefer Framer Motion with small translate/opacity.
- Example: `initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.3, ease:'easeOut' }}`

## Spacing Scale
- 8, 12, 16, 24, 48 px → use Tailwind: `2, 3, 4, 6, 12` (rem-based)

## Prohibited
- No `shadow-*`, emojis, flashy gradients, blur effects, glassmorphism.

## Component Rules

### Navbar/Header
- Container: fixed, full-width, `bg-dark` (no transparency), `border-b border-blue-700`, `py-3`.
- Brand: heading font, accent color minimal.
- Links: `text-neutral-200 hover:text-neutral-200/90`, underline or subtle border on hover.
- Mobile: slide-down panel, same surface and borders.

### Footer
- Surface: `bg-dark-gray-800`, `border-t border-blue-700`, `py-6`.
- Links/icons: neutral colors, accent on hover.

### Button
- Base: `rounded-none border border-blue-700 text-neutral-200 bg-transparent`
- Hover: `bg-bright-blue-500 text-dark` (ensure sufficient contrast)
- Padding: `px-4 py-2` (16px x 8/12px)
- Animation: subtle scale `1.02` on hover via motion.

### Card
- Base: `rounded-none border border-blue-700 bg-dark-gray-800`
- Padding: `p-4` or `p-6`
- No shadows.

### Input
- Base: `rounded-none border border-blue-700 bg-dark-gray-800 text-neutral-200 placeholder-neutral-400`
- Focus: `outline-none ring-0 border-bright-blue-500`
- Spacing: `px-4 py-3`

### Sections
- Container: `max-w-5xl mx-auto px-6`
- Vertical: `py-12` or `py-24`
- Headings: `font-heading text-neutral-200` with small `tracking-wide`

### Animations
- Consistent easing: `easeOut`
- Durations: 200–400ms
- Stagger lists subtly; avoid oversized motion.

## Application Guidelines
- Apply these rules to Header, Footer, Home, Projects, About, Contact.
- If adding or changing styles, update this document.
- Keep the tone dark + blue accent, minimal yet professional.

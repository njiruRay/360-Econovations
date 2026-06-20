---
name: Econovations Admin
colors:
  surface: '#f6fbf2'
  surface-dim: '#d7dbd3'
  surface-bright: '#f6fbf2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f5ec'
  surface-container: '#ebefe7'
  surface-container-high: '#e5eae1'
  surface-container-highest: '#dfe4dc'
  on-surface: '#181d18'
  on-surface-variant: '#3f493f'
  inverse-surface: '#2d322c'
  inverse-on-surface: '#eef2ea'
  outline: '#6f7a6e'
  outline-variant: '#bfc9bc'
  surface-tint: '#106d33'
  primary: '#004b1f'
  on-primary: '#ffffff'
  primary-container: '#00652c'
  on-primary-container: '#8ae098'
  inverse-primary: '#84d992'
  secondary: '#006d37'
  on-secondary: '#ffffff'
  secondary-container: '#98f3af'
  on-secondary-container: '#0b723b'
  tertiary: '#742136'
  on-tertiary: '#ffffff'
  tertiary-container: '#92384c'
  on-tertiary-container: '#ffbbc5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9ff6ac'
  primary-fixed-dim: '#84d992'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#005323'
  secondary-fixed: '#9bf6b2'
  secondary-fixed-dim: '#80d997'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005228'
  tertiary-fixed: '#ffd9de'
  tertiary-fixed-dim: '#ffb2bd'
  on-tertiary-fixed: '#400014'
  on-tertiary-fixed-variant: '#7d283c'
  background: '#f6fbf2'
  on-background: '#181d18'
  surface-variant: '#dfe4dc'
typography:
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system for 360 Econovations focuses on professional reliability and environmental stewardship through a refined, non-technical lens. The aesthetic balances a **Modern Corporate** foundation with **Minimalist** clarity, ensuring that complex economic and environmental data remains accessible and trustworthy.

The visual language is characterized by:
- **Professionalism:** High-quality typography and a disciplined grid.
- **Trustworthiness:** A "soft-natural" palette that avoids clinical whites in favor of organic, warm mint tones.
- **Clarity:** A card-based architecture inspired by Material Design, emphasizing information hierarchy through containerization rather than excessive line-work.

## Colors
The palette is grounded in "Deep Forest" greens to symbolize growth and sustainability. 

- **Primary & Secondary:** These shades of green are used for brand identification, active states, and primary navigation icons.
- **Accent/CTA:** Warm Orange is reserved strictly for high-priority calls to action, alerts, or critical data points that require immediate attention.
- **Neutral/Surface:** The background uses a soft mint white to reduce eye strain during long administrative sessions. Surfaces use a slightly darker, desaturated green-tinted grey to create subtle depth without relying on heavy shadows.

## Typography
The system employs a dual-font strategy to balance character with utility. 

**Montserrat** is used for headings to provide a confident, geometric, and modern feel. For headlines, utilize bold or semibold weights with slightly tighter letter-spacing to maintain a professional "editorial" look.

**Inter** is used for all body text, data tables, and UI labels. It provides exceptional legibility at small sizes and maintains a neutral, systematic tone. Use "Medium" weights for labels and interactive elements to ensure they stand out against body copy.

## Layout & Spacing
This design system utilizes a **Fluid Grid** model with a focus on generous whitespace to prevent data fatigue. 

- **Grid:** Use a 12-column grid for desktop views. Elements should typically span 3, 4, 6, or 12 columns to maintain symmetry.
- **Breakpoints:**
  - *Mobile (< 600px):* Single column layout with 16px side margins.
  - *Tablet (600px - 1024px):* 2-column card layouts with 24px margins.
  - *Desktop (> 1024px):* Full 12-column layout with 32px margins and a max-container width of 1440px.
- **Rhythm:** All spacing (padding, margins, gaps) must be multiples of 4px or 8px. Use 24px (lg) as the default gap between dashboard cards to create a sense of openness.

## Elevation & Depth
Depth is communicated through **Tonal Layers** supplemented by very soft, ambient shadows. 

- **Level 0 (Background):** Soft Mint White (#f6fbf2).
- **Level 1 (Cards/Surfaces):** Soft Green-Grey (#eaefe6). Use a 1px solid border (#becabc) to define boundaries.
- **Level 2 (Hover/Active):** When a card or element is interacted with, apply an extra-diffused shadow: `0px 4px 20px rgba(24, 29, 23, 0.05)`.
- **Level 3 (Modals/Popovers):** High elevation using a more pronounced shadow: `0px 12px 32px rgba(24, 29, 23, 0.1)`.

Avoid high-contrast shadows. The goal is to make elements appear as if they are gently resting on the surface rather than floating far above it.

## Shapes
The shape language is "Soft-Organic." 

- **Standard Containers:** Use a radius of 0.75rem (12px) for all dashboard cards, input fields, and modal containers. 
- **Buttons/Chips:** Use "Pill" shaping (full rounding) for all buttons and interactive chips to distinguish them from structural content containers.
- **Icons:** Use rounded icon sets (e.g., Lucide or Material Symbols Rounded) to match the UI's soft corner radius.

## Components

### Buttons
- **Primary:** Pill-shaped, Primary Green background, White text.
- **Secondary:** Pill-shaped, Transparent background, Primary Green border (1px), Primary Green text.
- **CTA:** Pill-shaped, Warm Orange background, White text. Reserved for "Save," "Submit," or "Upgrade" actions.

### Cards
Dashboard cards should have a background of `#eaefe6` and a subtle 1px border of `#becabc`. Internal padding should be a minimum of 24px (`spacing.lg`).

### Input Fields
Standard inputs use a 12px corner radius. The background should be White (#FFFFFF) to provide a "cut-out" effect against the `#eaefe6` surfaces. On focus, the border shifts to Primary Green with a 2px stroke.

### Lists & Data Tables
Tables should avoid vertical borders. Use horizontal dividers in `#becabc` with a 1px weight. Headers should use `label-sm` (uppercase) in the muted text color (#3f493f).

### Navigation
The sidebar should be clean with a White or very light Mint background. Use icons for primary navigation categories. Active states are indicated by a Primary Green icon and a subtle pill-shaped background highlight in a 10% opacity version of the primary color.

### Progress Indicators
For environmental or economic metrics, use thick, rounded progress bars. Use Primary Green for positive metrics and Warm Orange or Error Red for negative/critical metrics.
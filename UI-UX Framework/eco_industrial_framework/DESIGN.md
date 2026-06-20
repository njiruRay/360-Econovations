---
name: Eco-Industrial Framework
colors:
  surface: '#f6fbf2'
  surface-dim: '#d6dcd3'
  surface-bright: '#f6fbf2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f5ec'
  surface-container: '#eaefe6'
  surface-container-high: '#e4eae1'
  surface-container-highest: '#dfe4db'
  on-surface: '#181d17'
  on-surface-variant: '#3f493f'
  inverse-surface: '#2c322c'
  inverse-on-surface: '#edf2e9'
  outline: '#6f7a6e'
  outline-variant: '#becabc'
  surface-tint: '#006d30'
  primary: '#00652c'
  on-primary: '#ffffff'
  primary-container: '#15803d'
  on-primary-container: '#d3ffd5'
  inverse-primary: '#79db8d'
  secondary: '#006d37'
  on-secondary: '#ffffff'
  secondary-container: '#81f8a4'
  on-secondary-container: '#00723a'
  tertiary: '#913e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b85000'
  on-tertiary-container: '#fff1eb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#95f8a7'
  primary-fixed-dim: '#79db8d'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#005323'
  secondary-fixed: '#84faa7'
  secondary-fixed-dim: '#67dd8d'
  on-secondary-fixed: '#00210d'
  on-secondary-fixed-variant: '#005228'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f6fbf2'
  on-background: '#181d17'
  surface-variant: '#dfe4db'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system for 360 Econovations Enterprise bridges the gap between industrial efficiency and environmental stewardship. The brand personality is grounded and professional, reflecting the circular economy's logistical complexity, yet remains optimistic and trustworthy through vibrant accents.

The visual style is **Corporate Modern with a Minimalist focus**. It utilizes generous white space to allow high-quality imagery of sustainable materials and Kenyan landscapes to breathe. The aesthetic is modular and card-based, emphasizing organized data and clear calls to action. The interface should feel structured and reliable, utilizing a refined "Eco-Industrial" aesthetic that values clarity over ornamentation.

## Colors
The palette is rooted in a deep **Primary Green** (#15803D) representing sustainability and growth. **Action Orange** (#F97316) is reserved exclusively for primary conversion points to ensure high visibility against the green tones. 

**Highlight Gold** (#D4A017) serves as a specialized accent for badges, awards, or status indicators, providing a "premium" feel to circularity achievements. Backgrounds alternate between pure **White** and **Off-white** (#F6F7F4) to define content sections. A subtle **Green-tinted surface** (#ECF2ED) is used for low-contrast containers or secondary informative blocks.

## Typography
This design system pairs **Montserrat** for headlines with **Inter** for body copy. Montserrat provides a confident, geometric industrial feel that establishes authority in the circular economy sector. Inter ensures maximum readability for technical specifications and reporting.

Headlines use tight letter spacing and bold weights to create a sense of impact. Body text maintains a generous line height (1.5x - 1.6x) to facilitate scanning. Labels and small metadata use Inter in semi-bold with increased tracking for clarity in dense data layouts.

## Layout & Spacing
The system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. Spacing follows a 4px baseline, but emphasizes larger increments (24px, 48px) to achieve a "generous" feel that reflects the brand's optimistic outlook.

Layouts are modular and card-based. Sections should be separated by significant vertical padding (80px on desktop) to clearly differentiate between different circular economy services or impact metrics. Content containers should have a maximum width of 1280px to maintain readability on ultra-wide displays.

## Elevation & Depth
Depth is created through **Tonal layering** and **Ambient shadows**. Surfaces do not use heavy borders; instead, they rely on subtle background shifts (White to Off-white) to define hierarchy.

**Shadow Profile:**
- **Low (Cards):** `0px 4px 20px rgba(17, 17, 17, 0.06)`. A soft, diffused shadow that makes components feel "lifted" without being aggressive.
- **Active/Hover:** `0px 8px 30px rgba(17, 17, 17, 0.1)`. Used for interactive cards and primary buttons on hover to provide tactile feedback.

## Shapes
The shape language is primarily **Rounded (16px)** for containers and cards, which softens the industrial nature of the enterprise and makes the technology feel more approachable. 

Interactive elements like buttons and badges follow a **Pill-shaped** (fully rounded) geometry. This distinction between "Containers" (16px) and "Actions" (Pill) provides a clear mental model for the user: sharp corners for data/structure, soft curves for interaction.

## Components
- **Buttons:**
    - **Primary:** Solid Action Orange (#F97316), pill-shaped, with white text.
    - **Secondary:** Outline Primary Green (#15803D), pill-shaped, 2px stroke.
    - **Hover States:** Primary buttons shift to a slightly deeper shade; secondary buttons fill with a subtle green tint.
- **Cards:** White background with 16px border-radius and the "Low" shadow profile. Internal padding should be a minimum of 24px.
- **Badges:** Small, pill-shaped elements using Highlight Gold (#D4A017) with black text for categories or status labels (e.g., "Active Project," "Recycled").
- **Input Fields:** Off-white (#F6F7F4) backgrounds with a 1px border that turns Primary Green on focus. 12px border-radius.
- **Lists:** Icon-led lists using clear, line-based icons in Primary Green to denote progress or service features.
- **Progress Indicators:** Thick, rounded bars using Secondary Green to visualize environmental impact or project completion.
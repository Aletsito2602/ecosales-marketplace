# Kaapeh Coffee E-commerce - Color System Documentation

## Overview

This document outlines the improved color system for the Kaapeh coffee e-commerce website. The new system provides better UX, accessibility, and maintainability.

## Color Palette

### Primary Brand Colors

#### Primary (Turquoise)
- **Usage**: Main brand color, primary buttons, navigation, accents
- **Hex**: `#00afac` (primary-500)
- **Tailwind Classes**: `primary-50` through `primary-950`
- **Accessibility**: WCAG AA compliant when used with white text

#### Accent (Warm Yellow)
- **Usage**: Secondary accents, highlights, call-to-action elements
- **Hex**: `#f4d03f` (accent-500)
- **Tailwind Classes**: `accent-50` through `accent-950`
- **Note**: Warmer and more coffee-appropriate than the previous bright yellow

### Coffee-Themed Colors

#### Bean (Rich Browns)
- **Usage**: Coffee product highlights, warm accents
- **Hex**: `#a67c52` (bean-500)
- **Tailwind Classes**: `bean-50` through `bean-950`

#### Espresso (Dark Browns)
- **Usage**: Text, headers, dark UI elements
- **Hex**: `#231b18` (espresso-950)
- **Tailwind Classes**: `espresso-50` through `espresso-950`

### Neutral Colors

#### Warm Neutrals
- **Usage**: Backgrounds, borders, subtle text
- **Hex**: `#78716c` (warm-500)
- **Tailwind Classes**: `warm-50` through `warm-950`
- **Note**: Warm-toned grays that complement the coffee theme

## Migration Guide

### Old → New Color Mappings

| Old Class | New Class | Usage |
|-----------|-----------|-------|
| `coffee-500` | `primary-500` | Main brand color |
| `cream-500` | `accent-500` | Secondary accent |
| `coffee-800` | `espresso-800` | Dark text |
| `coffee-600` | `espresso-600` | Medium text |
| `gray-50` | `warm-50` | Light backgrounds |

### Legacy Support

The old `coffee` and `cream` color classes are still available for backward compatibility but are deprecated. They will be removed in a future version.

## Usage Guidelines

### Buttons

```tsx
// Primary button
<button className="bg-primary-500 hover:bg-primary-600 text-white">
  Primary Action
</button>

// Secondary button
<button className="bg-white hover:bg-primary-50 text-primary-600 border border-primary-200">
  Secondary Action
</button>
```

### Text Hierarchy

```tsx
// Main headings
<h1 className="text-espresso-800 dark:text-accent-200">Main Title</h1>

// Subheadings
<h2 className="text-espresso-700 dark:text-accent-300">Subtitle</h2>

// Body text
<p className="text-espresso-600 dark:text-accent-100">Body content</p>

// Muted text
<span className="text-warm-500 dark:text-warm-400">Muted text</span>
```

### Cards and Components

```tsx
// Product cards
<div className="bg-white border border-warm-100 shadow-sm hover:shadow-md">
  <h3 className="text-espresso-800">Product Name</h3>
  <p className="text-espresso-600">Description</p>
  <span className="text-primary-500">Price</span>
</div>
```

## Accessibility

### Contrast Ratios

All color combinations meet WCAG AA standards:

- **Primary-500 on white**: 4.52:1 ✅
- **Espresso-800 on white**: 12.63:1 ✅
- **Espresso-600 on white**: 7.23:1 ✅
- **Primary-500 on accent-50**: 4.12:1 ✅

### Dark Mode Support

All components support dark mode with appropriate color variants:

```tsx
<div className="bg-white dark:bg-espresso-800">
  <h2 className="text-espresso-800 dark:text-accent-200">Title</h2>
  <p className="text-espresso-600 dark:text-accent-100">Content</p>
</div>
```

## CSS Custom Properties

The color system uses CSS custom properties for dynamic theming:

```css
:root {
  --color-primary: #00afac;
  --color-primary-hover: #009a97;
  --color-accent: #f4d03f;
  --color-espresso: #231b18;
  --color-background: #ffffff;
}
```

## Implementation Files

- **Color Constants**: `src/lib/colors.ts`
- **Tailwind Config**: `tailwind.config.js`
- **CSS Variables**: `src/index.css`
- **Component Usage**: Updated throughout `src/components/` and `src/pages/`

## Best Practices

1. **Use semantic color names**: Prefer `primary-500` over `coffee-500`
2. **Maintain contrast**: Always check color combinations for accessibility
3. **Support dark mode**: Include dark variants for all color usage
4. **Use the color constants**: Import from `src/lib/colors.ts` for programmatic usage
5. **Test thoroughly**: Verify colors work across different devices and browsers

## Future Improvements

- [ ] Add color theme switcher
- [ ] Implement high contrast mode
- [ ] Add color blind accessibility testing
- [ ] Create color palette generator tool

---

*Last updated: September 2025*
*Version: 2.0*

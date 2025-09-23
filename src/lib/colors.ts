/**
 * Centralized color system for Kaapeh Coffee E-commerce
 * 
 * This file contains all color definitions used throughout the application.
 * Colors are organized by semantic meaning and usage context.
 */

// Brand Colors - Main identity colors
export const BRAND_COLORS = {
  // Primary turquoise - main brand color
  primary: {
    50: '#e6fffe',
    100: '#b8fffa', 
    200: '#80fcf4',
    300: '#4ae9e1',
    400: '#1cd0c8',
    500: '#00afac', // Main brand color
    600: '#009a97',
    700: '#008582',
    800: '#006c6a',
    900: '#004f4d',
    950: '#003f3d',
  },
  
  // Secondary cream/yellow - accent color
  accent: {
    50: '#fffef7',
    100: '#fffce6',
    200: '#fff7b8',
    300: '#fff181',
    400: '#fbe85b',
    500: '#f4d03f', // Warmer, more coffee-like yellow
    600: '#d4ac0d',
    700: '#b7950b',
    800: '#9a7d0a',
    900: '#7d6608',
    950: '#5d4e06',
  }
} as const;

// Coffee-themed colors - for coffee-related content
export const COFFEE_COLORS = {
  // Rich brown tones for coffee beans, text, etc.
  bean: {
    50: '#faf8f7',
    100: '#f2ede9',
    200: '#e6d7cf',
    300: '#d4bfb0',
    400: '#c0a08a',
    500: '#a67c52', // Rich coffee bean brown
    600: '#8b5a3c',
    700: '#6f4518',
    800: '#5d3914',
    900: '#4a2c0f',
    950: '#2d1a09',
  },
  
  // Dark espresso tones for headers, dark UI elements
  espresso: {
    50: '#f8f7f7',
    100: '#e9e6e4',
    200: '#d5cec9',
    300: '#baada4',
    400: '#a08a7e',
    500: '#8c7265',
    600: '#745a4f',
    700: '#5e4941',
    800: '#4d3c36',
    900: '#3d302c',
    950: '#231b18', // Deep espresso
  }
} as const;

// Neutral colors - for backgrounds, borders, text
export const NEUTRAL_COLORS = {
  // Warm grays with coffee undertones
  warm: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
    950: '#0c0a09',
  }
} as const;

// Semantic colors - for status, feedback, etc.
export const SEMANTIC_COLORS = {
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  }
} as const;

// Color combinations for common UI patterns
export const COLOR_COMBINATIONS = {
  // Primary button
  primaryButton: {
    background: BRAND_COLORS.primary[500],
    backgroundHover: BRAND_COLORS.primary[600],
    text: '#ffffff',
    textHover: '#ffffff',
  },
  
  // Secondary button
  secondaryButton: {
    background: '#ffffff',
    backgroundHover: BRAND_COLORS.primary[50],
    text: BRAND_COLORS.primary[600],
    textHover: BRAND_COLORS.primary[700],
    border: BRAND_COLORS.primary[200],
    borderHover: BRAND_COLORS.primary[300],
  },
  
  // Coffee product cards
  productCard: {
    background: '#ffffff',
    backgroundHover: NEUTRAL_COLORS.warm[50],
    text: COFFEE_COLORS.espresso[800],
    textSecondary: COFFEE_COLORS.espresso[600],
    accent: BRAND_COLORS.primary[500],
  },
  
  // Navigation
  navigation: {
    background: BRAND_COLORS.primary[500],
    text: '#ffffff',
    textHover: BRAND_COLORS.accent[100],
    pill: '#ffffff',
    pillText: BRAND_COLORS.primary[600],
  }
} as const;

// Export all colors as a single object for easy access
export const COLORS = {
  brand: BRAND_COLORS,
  coffee: COFFEE_COLORS,
  neutral: NEUTRAL_COLORS,
  semantic: SEMANTIC_COLORS,
  combinations: COLOR_COMBINATIONS,
} as const;

// Helper function to get color values
export const getColor = (path: string): string => {
  const keys = path.split('.');
  let current: any = COLORS;
  
  for (const key of keys) {
    current = current[key];
    if (current === undefined) {
      console.warn(`Color path "${path}" not found`);
      return '#000000';
    }
  }
  
  return current;
};

// CSS custom properties for dynamic theming
export const CSS_VARIABLES = {
  '--color-primary': BRAND_COLORS.primary[500],
  '--color-primary-hover': BRAND_COLORS.primary[600],
  '--color-accent': BRAND_COLORS.accent[500],
  '--color-accent-hover': BRAND_COLORS.accent[600],
  '--color-coffee-bean': COFFEE_COLORS.bean[500],
  '--color-espresso': COFFEE_COLORS.espresso[950],
  '--color-neutral': NEUTRAL_COLORS.warm[500],
  '--color-background': '#ffffff',
  '--color-surface': NEUTRAL_COLORS.warm[50],
} as const;

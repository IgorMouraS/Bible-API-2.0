'use client';
import { createGlobalStyle } from 'styled-components';

// ===== FONT FAMILIES =====
export const fontFamily = {
  montserrat: 'var(--font-montserrat)',
  tangerine: 'var(--font-tangerine)',
  roboto: 'var(--font-roboto)',
};

// ===== COLORS =====
export const colors = {
  primary: '#667eea',
  secondary: '#764ba2',
  success: '#28a745',
  warning: '#ffc107',
  danger: '#dc3545',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
};

// ===== SPACING =====
export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  xxl: '3rem',      // 48px
  xxxl: '4rem',     // 64px
};

// ===== FONT SIZES =====
export const fontSize = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
  '6xl': '3.75rem',  // 60px
};

// ===== FONT WEIGHTS =====
export const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

// ===== LINE HEIGHTS =====
export const lineHeight = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.75,
};

// ===== BORDER RADIUS =====
export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
};

// ===== SHADOWS =====
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
};

// ===== BREAKPOINTS =====
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// ===== Z-INDEX =====
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

// ===== TRANSITIONS =====
export const transitions = {
  fast: '150ms ease-in-out',
  normal: '250ms ease-in-out',
  slow: '350ms ease-in-out',
};

// ===== COMMON STYLES =====
export const commonStyles = {
  // Flexbox utilities
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexBetween: `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  flexColumn: `
    display: flex;
    flex-direction: column;
  `,
  
  // Text utilities
  textCenter: `
    text-align: center;
  `,
  textTruncate: `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  
  // Button base
  buttonBase: `
    border: none;
    border-radius: ${borderRadius.md};
    font-weight: ${fontWeight.medium};
    cursor: pointer;
    transition: all ${transitions.normal};
    font-family: inherit;
  `,
  
  // Card base
  cardBase: `
    background: ${colors.white};
    border-radius: ${borderRadius.lg};
    box-shadow: ${shadows.md};
    padding: ${spacing.lg};
  `,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fontFamily.montserrat};
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${fontFamily.montserrat};
    font-size: ${fontSize.base};
    line-height: ${lineHeight.normal};
    color: ${colors.gray[800]};
    background-color: ${colors.light};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.tight};
    margin-bottom: ${spacing.md};
  }

  h1 { font-size: ${fontSize['4xl']}; }
  h2 { font-size: ${fontSize['3xl']}; }
  h3 { font-size: ${fontSize['2xl']}; }
  h4 { font-size: ${fontSize.xl}; }
  h5 { font-size: ${fontSize.lg}; }
  h6 { font-size: ${fontSize.base}; }

  p {
    margin-bottom: ${spacing.md};
  }

  a {
    color: ${colors.primary};
    text-decoration: none;
    transition: color ${transitions.fast};
    
    &:hover {
      color: ${colors.secondary};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  // Scrollbar personalizada
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.gray[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.gray[400]};
    border-radius: ${borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.gray[500]};
  }
`;


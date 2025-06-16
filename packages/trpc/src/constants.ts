export const Themes = {
  DARK: 'dark',
  LIGHT: 'light',
  SOLARIZED_DARK: 'solarized-dark',
  SOLARIZED_LIGHT: 'solarized-light',
  SYSTEM: 'system'
} as const

export type Theme = (typeof Themes)[keyof typeof Themes]

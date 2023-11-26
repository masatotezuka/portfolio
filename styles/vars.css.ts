import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#008B8B',
    secondary: '#f7f7f7'
  },
  fontSize: {
    xs: '0.75rem', // 12px
    s: '0.875rem', // 14px
    base: '1rem',
    l: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem' // 48px
  }
})

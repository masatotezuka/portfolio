import { vars } from '@/styles/vars.css'
import { style } from '@vanilla-extract/css'

export const text = style({
  fontSize: vars.fontSize.l,
  width: 'fit-content',
  margin: '0px',
  ':hover': {
    cursor: 'pointer',
    color: vars.color.primary,
    textDecoration: 'underline'
  },
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: vars.fontSize.base
    }
  }
})

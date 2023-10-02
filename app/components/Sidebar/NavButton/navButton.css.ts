import { style } from '@vanilla-extract/css'

export const list = style({
  ':hover': {
    cursor: 'pointer',
    color: '#008B8B',
    textDecoration: 'underline'
  }
})

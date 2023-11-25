import { style } from '@vanilla-extract/css'

export const list = style({
  fontSize: '20px',
  ':hover': {
    cursor: 'pointer',
    color: '#008B8B',
    textDecoration: 'underline'
  },
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '16px'
    }
  }
})

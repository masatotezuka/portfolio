import { style } from '@vanilla-extract/css'

export const navigation = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  rowGap: '24px',
  '@media': {
    'screen and (max-width: 768px)': {
      rowGap: '20px'
    }
  }
})

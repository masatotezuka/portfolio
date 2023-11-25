import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
  '@media': {
    'screen and (max-width: 768px)': {
      gap: '40px'
    }
  }
})

export const title = style({
  margin: '60px 0px 0px 0px',
  fontSize: '40px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '32px',
      margin: '80px 0px 0px 0px'
    }
  }
})

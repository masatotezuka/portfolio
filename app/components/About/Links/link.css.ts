import { style } from '@vanilla-extract/css'

export const container = style({
  boxShadow: '0px 3px 6px 0px #9E9E9E',
  padding: '70px 0px'
})

export const imageContainer = style({
  backgroundColor: 'white',
  display: 'grid',
  gap: '50px',
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(5,50px)',
  gridTemplateRows: 'repeat(1, 50px)'
})

export const image = style({
  width: '50px',
  height: '50px',
  ':hover': {
    opacity: '0.7'
  }
})

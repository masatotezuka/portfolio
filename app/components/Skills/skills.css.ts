import { style } from '@vanilla-extract/css'

export const container = style({
  marginTop: '150px',
  boxShadow: '0px 3px 6px 0px #9E9E9E',
  padding: '70px 0px'
})

export const imageContainer = style({
  backgroundColor: 'white',
  display: 'grid',
  gap: '30px',
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(6,50px)',
  gridTemplateRows: 'repeat(2, 50px)'
})

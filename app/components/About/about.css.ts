import { style } from '@vanilla-extract/css'

export const container = style({
  marginTop: '100px',
  display: 'flex',
  gap: '28px',
  flexGrow: 1
})

export const imageContainer = style({
  flexBasis: '40%'
})

export const introductionContainer = style({
  fontSize: '16px',
  lineHeight: '1.5',
  flexBasis: '60%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

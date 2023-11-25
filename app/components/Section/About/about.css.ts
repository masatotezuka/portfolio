import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '100px'
})

export const container = style({
  display: 'flex',
  gap: '28px',
  flexGrow: 1,
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column'
    }
  }
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
  justifyContent: 'center',
  overflowWrap: 'break-word'
})

export const image = style({
  width: '100%',
  height: 'auto',
  borderRadius: '50%',
  aspectRatio: '1/1',
  objectFit: 'cover',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '50%',
      height: 'auto'
    }
  }
})

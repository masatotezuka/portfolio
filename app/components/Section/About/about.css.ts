import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  '@media': {
    'screen and (max-width: 768px)': {
      gap: '50px'
    }
  }
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
  flexBasis: '40%',
  '@media': {
    'screen and (max-width: 768px)': {
      flexBasis: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  }
})

export const introductionContainer = style({
  fontSize: '16px',
  lineHeight: '1.5',
  flexBasis: '60%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflowWrap: 'break-word',
  '@media': {
    'screen and (max-width: 768px)': {
      flexBasis: '100%'
    }
  }
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

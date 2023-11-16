import { style } from '@vanilla-extract/css'

export const container = style({
  paddingLeft: '50px',
  borderLeft: '2px solid #333'
})

export const eventContainer = style({
  marginBottom: '20px',
  padding: '10px 20px',
  backgroundColor: 'white',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  width: 'fit-content',
  ':before': {
    content: '',
    position: 'absolute',
    left: '-29px',
    top: '10px',
    width: '10px',
    height: '10px',
    backgroundColor: '#333',
    borderRadius: '50%',
    border: '2px solid white'
  }
})

export const introductionContainer = style({
  fontSize: '16px',
  lineHeight: '1.5',
  flexBasis: '60%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

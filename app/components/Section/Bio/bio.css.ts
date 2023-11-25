import { style } from '@vanilla-extract/css'

export const timelineContainer = style({
  borderLeft: '3px solid #333',
  position: 'relative'
})

export const timeline = style({
  paddingLeft: '50px',
  paddingBottom: '20px',
  ':before': {
    content: '',
    width: '12px',
    height: '12px',
    background: '#008B8B',
    position: 'absolute',
    left: '-7px',
    top: '0px',
    borderRadius: '100%'
  },
  '@media': {
    'screen and (max-width: 768px)': {
      paddingLeft: '30px'
    }
  }
})

export const timelineContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
})

export const introductionContainer = style({
  fontSize: '16px',
  lineHeight: '1.5',
  flexBasis: '60%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

export const timelineContentTitle = style({
  fontSize: '24px',
  color: '#008B8B',
  fontWeight: 'bold',
  margin: '0px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '20px'
    }
  }
})

export const timelineContentDate = style({
  fontSize: '16px',
  color: '#008B8B',
  margin: '0px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '14px'
    }
  }
})

export const timelineContentDescription = style({
  fontSize: '16px',
  margin: '10px 0px',
  lineHeight: '2.0',
  overflowWrap: 'break-word',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '14px',
      lineHeight: '1.5'
    }
  }
})

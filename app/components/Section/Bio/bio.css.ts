import { vars } from '@/styles/vars.css'
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
    background: vars.color.primary,
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
  fontSize: vars.fontSize.base,
  lineHeight: '1.5',
  flexBasis: '60%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

export const timelineContentTitle = style({
  fontSize: vars.fontSize['2xl'],
  color: vars.color.primary,
  fontWeight: 'bold',
  margin: '0px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: vars.fontSize.l
    }
  }
})

export const timelineContentDate = style({
  fontSize: vars.fontSize.base,
  color: vars.color.primary,
  margin: '0px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '14px'
    }
  }
})

export const timelineContentDescription = style({
  fontSize: vars.fontSize.base,
  margin: '10px 0px',
  lineHeight: '2.0',
  overflowWrap: 'break-word',
  whiteSpace: 'pre-wrap',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '14px',
      lineHeight: '1.5'
    }
  }
})

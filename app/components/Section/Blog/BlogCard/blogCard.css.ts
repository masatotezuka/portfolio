import { style } from '@vanilla-extract/css'

export const container = style({
  padding: '0px 0px 0px 30px',
  textDecoration: 'none',
  color: 'black',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '10px 0px'
    }
  }
})

export const blogContent = style({
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '8px',
  flexGrow: 1,
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0px 10px',
      flexShrink: 1
    }
  }
})

export const title = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '16px'
    }
  }
})

export const publishedAt = style({
  fontSize: '16px',
  margin: '0px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '12px'
    }
  }
})

export const site = style({
  fontSize: '16px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '12px'
    }
  }
})

export const siteContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  height: '16px',
  width: '16px'
})

export const imageContainer = style({
  flexShrink: 0,
  flexBasis: '300px',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none'
    }
  }
})

export const image = style({
  objectFit: 'contain',
  width: '100%',
  height: '100%'
})

export const thumbnail = style({
  objectFit: 'contain',
  aspectRatio: '1',
  width: '100%',
  height: '100%',
  borderRadius: '10px'
})

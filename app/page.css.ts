import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  margin: '0 auto',
  maxWidth: '1080px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%'
    }
  }
})

export const sidebarContainer = style({
  height: '100vh',
  backgroundColor: '#f7f7f7',
  position: 'fixed',
  width: '25%',
  overflowY: 'auto',
  top: 0,
  left: 0
})

export const mainContainer = style({
  marginLeft: '25%',
  width: '100%',
  padding: '24px 0px',
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '0 auto'
    }
  }
})

export const workContainer = style({
  height: '80vh'
})

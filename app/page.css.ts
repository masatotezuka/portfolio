import { vars } from '@/styles/vars.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  margin: '0 auto',
  maxWidth: '1080px'
})

export const sidebarContainer = style({
  height: '100vh',
  backgroundColor: vars.color.secondary,
  position: 'fixed',
  width: '25%',
  overflowY: 'auto',
  top: 0,
  left: 0,
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none'
    }
  }
})

export const mobileHeaderContainer = style({
  backgroundColor: '#f7f7f7',
  position: 'fixed',
  width: '100%',
  zIndex: 1,
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none'
    }
  }
})

export const mainContainer = style({
  marginLeft: '25%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '0px 15px',
      margin: '0 auto'
    }
  }
})

export const workContainer = style({
  height: '80vh'
})

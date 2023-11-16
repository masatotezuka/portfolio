import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  margin: '0 auto',
  maxWidth: '1080px'
})

export const sidebarContainer = style({
  height: '100vh',
  backgroundColor: '#f7f7f7',
  position: 'fixed',
  width: '20rem',
  overflowY: 'auto',
  top: 0
})

export const mainContainer = style({
  marginLeft: '20rem',
  width: '100%',
  // backgroundColor: '#B0E0E6',
  padding: '48px',
  display: 'flex',
  flexDirection: 'column'
})

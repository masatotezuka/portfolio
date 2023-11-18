import { style } from '@vanilla-extract/css'

export const container = style({
  padding: '0px 0px 0px 30px',
  textDecoration: 'none',
  color: 'black',
  display: 'flex',
  width: '100%'
})

export const blogContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '8px',
  flex: 1
})

export const title = style({
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0px'
})

export const publishedAt = style({
  fontSize: '16px',
  margin: '0px'
})

export const site = style({
  fontSize: '16px'
})

export const siteContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  height: '16px',
  width: '16px'
})

export const image = style({
  objectFit: 'contain',
  width: '100%',
  height: '100%'
})

export const thumbnail = style({
  objectFit: 'contain',
  width: '100%',
  height: '100%',
  borderRadius: '10px'
})

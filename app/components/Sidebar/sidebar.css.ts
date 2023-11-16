import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  margin: '0 auto',
  padding: '120px 80px'
})

export const profile = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start'
})

export const name = style({
  fontSize: '20px',
  color: '#008B8B',
  fontWeight: 'bold',
  textDecoration: 'none'
})

export const job = style({
  fontSize: '16px',
  color: '#008B8B',
  marginBottom: '40px'
})

export const navigation = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: 0,
  rowGap: '24px'
})

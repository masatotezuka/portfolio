import { vars } from '@/styles/vars.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 10px'
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})
export const name = style({
  fontSize: vars.fontSize.l,
  color: vars.color.primary,
  fontWeight: 'bold',
  textDecoration: 'none'
})

export const button = style({
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  ':hover': {
    opacity: 0.5
  }
})

export const icon = style({
  color: vars.color.primary
})

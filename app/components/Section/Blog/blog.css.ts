import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  width: '900px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%'
    }
  }
})

export const tabList = style({
  display: 'flex',
  width: '900px',
  borderBottom: '1px solid gray',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%'
    }
  }
})

export const tabTrigger = style({
  display: 'flex',
  flex: 1,
  height: '30px',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  backgroundColor: 'white',
  border: 'none',
  fontFamily: 'inherit',
  ':hover': {
    opacity: '0.5',
    cursor: 'pointer'
  },
  selectors: {
    '&[data-state="active"]': {
      color: '#008B8B',
      borderBottom: '1px solid #008B8B',
      boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor'
    }
  },
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '16px'
    }
  }
})

export const blogCardLinkContainers = style({
  listStyle: 'none',
  padding: '20px 0px',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  height: '70vh',
  overflowY: 'scroll'
})

export const blogCardContainer = style({
  backgroundColor: 'white',
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
  border: '1px solid #eaeaea',
  borderRadius: '10px',
  width: '100%',
  height: '130px',
  transition: 'box-shadow 0.1s ease-in-out',
  display: 'flex',
  ':hover': {
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer'
  }
})

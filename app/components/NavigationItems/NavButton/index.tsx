import React, { FC } from 'react'
import * as styles from './navButton.css'
import { Link as Scroll } from 'react-scroll'

type Props = {
  to: string
  label: string
  toggleNavigationBarOpen?: () => void
}

export const NavButton: FC<Props> = ({ to, label, toggleNavigationBarOpen }) => {
  return (
    <li>
      <p className={styles.text}>
        <Scroll to={to} smooth={true} duration={500} spy={true} onClick={toggleNavigationBarOpen}>
          {label}
        </Scroll>
      </p>
    </li>
  )
}

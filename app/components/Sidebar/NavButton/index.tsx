import React, { FC } from 'react'
import * as styles from './navButton.css'
import { Link as Scroll } from 'react-scroll'

type Props = {
  to: string
  label: string
}

export const NavButton: FC<Props> = ({ to, label }) => {
  return (
    <li className={styles.list}>
      <Scroll to={to} smooth={true} duration={500} spy={true}>
        {label}
      </Scroll>
    </li>
  )
}

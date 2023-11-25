import { FC } from 'react'
import * as styles from './navigationItems.css'
import { NavButton } from '../NavigationItems/NavButton'
import { SECTION_LIST } from '@/constants'

type Props = {
  toggleNavigationBarOpen?: () => void
}

export const NavigationItems: FC<Props> = ({ toggleNavigationBarOpen }) => {
  return (
    <nav>
      <ul className={styles.navigation}>
        {Object.entries(SECTION_LIST).map(([key, value]) => {
          return (
            <NavButton
              key={key}
              to={value.sectionLabel}
              label={value.navLabel}
              toggleNavigationBarOpen={toggleNavigationBarOpen}
            />
          )
        })}
      </ul>
    </nav>
  )
}

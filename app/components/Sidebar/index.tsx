'use client'
import { FC } from 'react'
import * as styles from './sidebar.css'
import { NavButton } from './NavButton'
import { SECTION_LIST } from '@/constants'

export const Sidebar: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <a href='/' className={styles.name}>
          Masato Tezuka
        </a>
        <p className={styles.job}>Web Developer</p>
      </div>
      <nav>
        <ul className={styles.navigation}>
          {Object.entries(SECTION_LIST).map(([key, value]) => {
            return <NavButton key={key} to={value.sectionLabel} label={value.navLabel} />
          })}
        </ul>
      </nav>
    </div>
  )
}

'use client'
import { FC } from 'react'
import * as styles from './sidebar.css'
import { NavButton } from './NavButton'
import { NAV_ITEMS } from '@/constans'

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
          {NAV_ITEMS.map((item, index) => {
            return <NavButton key={index} to={item.to} label={item.label} />
          })}
        </ul>
      </nav>
    </div>
  )
}

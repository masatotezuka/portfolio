'use client'
import { FC } from 'react'
import * as styles from './sidebar.css'
import { NavigationItems } from '../NavigationItems'

export const Sidebar: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <a href='/' className={styles.name}>
          Masato Tezuka
        </a>
        <p className={styles.job}>Web Developer</p>
      </div>
      <NavigationItems />
    </div>
  )
}

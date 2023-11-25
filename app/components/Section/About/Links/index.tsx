'use client'
import { FC } from 'react'
import Image from 'next/image'
import { LINK_LIST } from '@/constants'
import * as styles from './link.css'

export const Links: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkListContainer}>
        {LINK_LIST.map((link) => {
          return (
            <div key={link.url} className={styles.imageContainer}>
              <Image
                onClick={() => window.open(link.url)}
                src={link.image}
                alt={link.name}
                width={1280}
                height={852}
                className={styles.image}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

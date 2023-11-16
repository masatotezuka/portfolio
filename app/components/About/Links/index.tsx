'use client'
import { FC } from 'react'
import Image from 'next/image'
import { LINK_LIST } from '@/constans'
import * as styles from './link.css'

export const Links: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {LINK_LIST.map((link) => {
          return (
            <div key={link.url} className={styles.image}>
              <Image
                onClick={() => window.open(link.url)}
                src={link.image}
                alt={link.name}
                width={1280}
                height={852}
                style={{
                  width: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(7px 9px 6px #aaaaaa)',
                  cursor: 'pointer',
                  objectFit: 'contain'
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

import Image from 'next/image'
import { FC } from 'react'
import * as styles from './skills.css'
import { SKILL_LIST } from '@/constants'

export const Skills: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {SKILL_LIST.map((skill, index) => {
          return (
            <Image
              key={index}
              src={skill.image}
              alt={skill.name}
              width={1280}
              height={852}
              style={{
                width: '100%',
                height: 'auto',
                filter: 'drop-shadow(7px 9px 6px #aaaaaa)'
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

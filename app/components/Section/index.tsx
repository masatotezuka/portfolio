'usee client'
import { FC } from 'react'
import * as styles from './section.css'

type Props = {
  title: string
  sectionLabel: string
  children: React.ReactNode
}
export const Section: FC<Props> = ({ title, sectionLabel, children }) => {
  return (
    <div id={sectionLabel} className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  )
}

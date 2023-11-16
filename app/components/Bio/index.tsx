import React, { FC } from 'react'
import * as styles from './bio.css'
export const Bio: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.eventContainer}>
        <p>2023.4 フリーランス</p>
        <p>2023.3 神戸大学大学院 保健学研究科 卒業</p>
        <p>2021.3 神戸大学大学院 医学部保健学科 卒業</p>
      </div>
    </div>
  )
}

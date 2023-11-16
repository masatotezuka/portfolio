import { FC } from 'react'
import Image from 'next/image'
import profileImage from '@/public/profile.png'
import * as styles from './about.css'
import { Links } from './Links'

export const About: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={profileImage}
            alt='profile image'
            width={1280}
            height={852}
            className={styles.image}
          />
        </div>
        <div className={styles.introductionContainer}>
          <p>
            1997年7月31日生まれ <br />
            長野県安曇野市出身
            <br />
            現在は、Webエンジニアをしています。 <br />
            学生時代は、ヘルスケア分野の研究をしていました。
            大学院ではヘルスケア分野の国際論文を3本出版し、ヘルスケアスタートアップ企業でプロダクト開発をしています。
            <br />
            趣味: 筋トレ・サウナ・アニメ・キャンプ・登山
          </p>
        </div>
      </div>
      <Links />
    </div>
  )
}

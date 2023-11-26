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
            <br />
            現在はWebエンジニアとして働いており、
            <br />
            バックエンドとフロントエンドの開発経験があります。
            <br />
            エンジニアリングだけでなく、 プロダクトマネジメントにも関心があります。
            <br />
            <br />
            学生時代は、ヘルスケアスタートアップ企業で3年間インターンをしていました。
            <br />
            研究では医療・ヘルスケア分野の国際論文を3本出版しました。
            <br />
            <br />
            趣味: 筋トレ・サウナ・アニメ・キャンプ・登山
            <br />
            保有資格: 理学療法士
          </p>
        </div>
      </div>
      <Links />
    </div>
  )
}

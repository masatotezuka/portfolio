import React, { FC } from 'react'
import * as styles from './bio.css'
export const Bio: FC = () => {
  return (
    // TODO: リファクタリング
    <div>
      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          <p className={styles.timelineContentTitle}>フリーランス</p>
          <p className={styles.timelineContentDate}>2023.4〜</p>
          <p className={styles.timelineContentDescription}>
            ・ECコンサル事業のDX支援サービス・人材紹介サービス・製造業のDX推進サービスの新規機能開発
            <br />
            ・担当領域はバックエンドとフロントエンド
            <br />
            ・技術スタック: TypeScript / Express / Next.js / MySQL / Docker
          </p>
        </div>
      </div>
      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          <p className={styles.timelineContentTitle}>神戸大学大学院</p>
          <p className={styles.timelineContentDate}>2021.4〜2023.3</p>
          <p className={styles.timelineContentDescription}>
            ・医療・ヘルスケア分野の国際論文を3本出版 <br />
            ・研究領域: 産業保健 / 健康経営 / 医療レセプトデータ <br />
          </p>
        </div>
      </div>
      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          <p className={styles.timelineContentTitle}>株式会社バックテック(インターン)</p>
          <p className={styles.timelineContentDate}>2020.3〜2023.3</p>
          <p className={styles.timelineContentDescription}>
            ・RとBIツール（Redash）を利用したデータ分析業務に主に従事
            <br />
            ・ユーザーからの問い合わせに対するカスタマーサポートを担当 <br />
            ・要件定義、設計、開発、テスト、リリースまでの一連の業務を経験（2023.9〜2023.3）
            <br />
            ・技術スタック: TypeScript / Express / React / PostgreSQL
          </p>
        </div>
      </div>
      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          <p className={styles.timelineContentTitle}>神戸大学</p>
          <p className={styles.timelineContentDate}>2017.4〜2021.3</p>
          <p className={styles.timelineContentDescription}>
            ・理学療法学について学び、卒業後に理学療法士の資格を取得
            <br />
          </p>
        </div>
      </div>
    </div>
  )
}

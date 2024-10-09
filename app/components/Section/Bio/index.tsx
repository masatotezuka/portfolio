import React, { FC } from 'react'
import * as styles from './bio.css'

const timelineData = [
  {
    title: 'フリーランス',
    date: '2023.4〜',
    description: `・ECコンサル事業のDX支援サービス・人材紹介サービス・製造業のDX推進サービスの新規機能開発
・担当領域はバックエンドとフロントエンド
・技術スタック: TypeScript / Express / Next.js / MySQL / Docker`
  },
  {
    title: '神戸大学院',
    date: '2021.4〜2023.3',
    description: `・研究領域: 産業保健 / 健康経営 / 医療レセプトデータ
・Rを用いてデータ分析を行い、論文を執筆
・医療・ヘルスケア分野の国際論文を3本出版`
  },
  {
    title: '株式会社バックテック(インターン)',
    date: '2020.3〜2023.3',
    description: `・RとBIツール（Redash）を利用したデータ分析業務に主に従事
・ユーザーからの問い合わせに対するカスタマーサポートを担当
・要件定義、設計、開発、テスト、リリースまでの一連の業務を経験（2023.9〜2023.3）
・技術スタック: TypeScript / Express / React / PostgreSQL`
  },
  {
    title: '神戸大学',
    date: '2017.4〜2021.3',
    description: `・理学療法学について学び、卒業後に理学療法士の資格を取得`
  }
]

const TimelineEntry: FC<{ title: string; date: string; description: string }> = ({
  title,
  date,
  description
}) => (
  <div className={styles.timelineContainer}>
    <div className={styles.timeline}>
      <p className={styles.timelineContentTitle}>{title}</p>
      <p className={styles.timelineContentDate}>{date}</p>
      <p className={styles.timelineContentDescription}>{description}</p>
    </div>
  </div>
)

export const Bio: FC = () => {
  return (
    <div>
      {timelineData.map((entry, index) => (
        <TimelineEntry
          key={index}
          title={entry.title}
          date={entry.date}
          description={entry.description}
        />
      ))}
    </div>
  )
}

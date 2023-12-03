import type { Metadata } from 'next'
import * as styles from './layout.css'

export const metadata: Metadata = {
  title: 'Masato | Portfolio',
  description:
    'Masatoのポートフォリオサイトです。現在はWebエンジニアとして働いており、バックエンドとフロントエンドの開発経験があります。エンジニアリングだけでなく、プロダクトマネジメントにも関心があります。 趣味は筋トレ・サウナ・アニメ・キャンプです。',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={styles.body}>
        <main> {children}</main>
      </body>
    </html>
  )
}

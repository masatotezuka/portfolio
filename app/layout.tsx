import type { Metadata } from 'next'
import * as styles from './layout.css'

export const metadata: Metadata = {
  title: 'Masato | Portfolio',
  description:
    '手塚真斗のポートフォリオサイトです。株式会社RightTouchでプロダクトエンジニアとして、カスタマーサポート向けボイスAI SaaS「QANT スピーク」の開発に携わっています。',
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

import { Sidebar } from './components/Sidebar'
import * as styles from './page.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.mainContainer}>
        <div id='about' className={styles.contentContainer}>
          <h1 className={styles.title}>About</h1>
          {/* ここにプロフィール画像 */}
          <p>{/* 自己紹介 */}</p>
        </div>
        <div id='skills' className={styles.contentContainer}>
          <h1 className={styles.title}>Skills</h1>
        </div>
        <div id='education' className={styles.contentContainer}>
          <h1 className={styles.title}>Education</h1>
        </div>
        <div id='links' className={styles.contentContainer}>
          <h1 className={styles.title}>Links</h1>
        </div>
        <div id='contact' className={styles.contentContainer}>
          <h1 className={styles.title}>Contact</h1>
        </div>
      </div>
    </div>
  )
}

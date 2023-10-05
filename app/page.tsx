import { Sidebar } from './components/Sidebar'
import * as styles from './page.css'
import { Section } from './components/Section'
import { About } from './components/About'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.mainContainer}>
        <Section title='About' sectionLabel='about'>
          <About />
        </Section>
        <Section title='Skills' sectionLabel='skills'>
          <p>skill</p>
        </Section>
        <Section title='Education' sectionLabel='education'>
          <p>education</p>
        </Section>
        <Section title='Links' sectionLabel='links'>
          <p>Links</p>
        </Section>
        <Section title='Contact' sectionLabel='contact'>
          <p>contact</p>
        </Section>
      </div>
    </div>
  )
}

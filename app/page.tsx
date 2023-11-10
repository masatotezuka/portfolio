import { Sidebar } from './components/Sidebar'
import * as styles from './page.css'
import { Section } from './components/Section'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { SECTION } from '@/constans'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.mainContainer}>
        <Section title={SECTION['ABOUT'].title} sectionLabel={SECTION['ABOUT'].sectionLabel}>
          <About />
        </Section>
        <Section title={SECTION['SKILLS'].title} sectionLabel={SECTION['SKILLS'].sectionLabel}>
          <Skills />
        </Section>
        <Section title={SECTION['BIO'].title} sectionLabel={SECTION['BIO'].sectionLabel}>
          <p>education</p>
        </Section>
        <Section title={SECTION['LINKS'].title} sectionLabel={SECTION['LINKS'].sectionLabel}>
          <p>Links</p>
        </Section>
        <Section title={SECTION['CONTACT'].title} sectionLabel={SECTION['CONTACT'].sectionLabel}>
          <p>contact</p>
        </Section>
      </div>
    </div>
  )
}

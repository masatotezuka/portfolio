import { Sidebar } from './components/Sidebar'
import * as styles from './page.css'
import { Section } from './components/Section'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { SECTION_LIST } from '@/constans'
import { Bio } from './components/Bio'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.mainContainer}>
        <Section
          title={SECTION_LIST['ABOUT'].title}
          sectionLabel={SECTION_LIST['ABOUT'].sectionLabel}
        >
          <About />
        </Section>
        <Section title={SECTION_LIST['BIO'].title} sectionLabel={SECTION_LIST['BIO'].sectionLabel}>
          <Bio />
        </Section>
        <Section
          title={SECTION_LIST['SKILLS'].title}
          sectionLabel={SECTION_LIST['SKILLS'].sectionLabel}
        >
          <Skills />
        </Section>
        <Section
          title={SECTION_LIST['ARTICLES'].title}
          sectionLabel={SECTION_LIST['ARTICLES'].sectionLabel}
        >
          <p>coming soon...</p>
        </Section>
        <Section
          title={SECTION_LIST['WORKS'].title}
          sectionLabel={SECTION_LIST['WORKS'].sectionLabel}
        >
          <p>Coming soon...</p>
        </Section>
      </div>
    </div>
  )
}

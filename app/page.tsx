import { Sidebar } from './components/Sidebar'
import { MobileHeader } from './components/MobileHeader'
import * as styles from './page.css'
import { Section } from './components/Section'
import { About } from './components/Section/About'
import { Skills } from './components/Section/Skills'
import { SECTION_LIST } from '@/constants'
import { Bio } from './components/Section/Bio'
import { Blog } from './components/Section/Blog'
import { useBlogData } from './hooks/useBlogData'

export default async function Home() {
  const { blogData } = await useBlogData()
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.mobileHeaderContainer}>
        <MobileHeader />
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
          title={SECTION_LIST['BLOG'].title}
          sectionLabel={SECTION_LIST['BLOG'].sectionLabel}
        >
          <Blog blogData={blogData} />
        </Section>
        <Section
          title={SECTION_LIST['WORKS'].title}
          sectionLabel={SECTION_LIST['WORKS'].sectionLabel}
        >
          <div className={styles.workContainer}>
            <p>Coming soon...</p>
          </div>
        </Section>
      </div>
    </div>
  )
}

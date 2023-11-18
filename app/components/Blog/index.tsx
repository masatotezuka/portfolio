'use client'
import { FC } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as styles from './blog.css'
import { BlogCard } from './BlogCard'

export const blogMockData = [
  {
    title: 'zenn1',
    publishedAt: '2021/09/16',
    url: 'https://zenn.dev/masatotezuka',
    favicon: 'https://zenn.dev/images/logo-transparent.png',
    site: 'Zenn'
  },
  {
    title: 'zenn1',
    publishedAt: '2021/09/16',
    url: 'https://zenn.dev/ynakamura/articles/d30ee1cb6f3a15',
    favicon: 'https://zenn.dev/images/logo-transparent.png',
    site: 'Zenn'
  },
  {
    title: 'note1',
    publishedAt: '2021/09/16',
    url: 'https://note.com/mst_tez/n/n76eeae41089b',
    favicon:
      'https://assets.st-note.com/poc-image/manual/note-common-images/production/svg/production.ico',
    site: 'note'
  },
  {
    title: 'zenn1',
    publishedAt: '2021/09/16',
    url: 'https://zenn.dev/masatotezuka',
    favicon: 'https://zenn.dev/images/logo-transparent.png',
    site: 'Zenn'
  },
  {
    title: 'zenn1',
    publishedAt: '2021/09/16',
    url: 'https://zenn.dev/ynakamura/articles/d30ee1cb6f3a15',
    favicon: 'https://zenn.dev/images/logo-transparent.png',
    site: 'Zenn'
  },
  {
    title: 'note1',
    publishedAt: '2021/09/16',
    url: 'https://note.com/mst_tez/n/n76eeae41089b',
    favicon:
      'https://assets.st-note.com/poc-image/manual/note-common-images/production/svg/production.ico',
    site: 'note'
  }
]

export const Blog: FC = () => (
  <>
    <Tabs.Root defaultValue='all' className={styles.root}>
      <Tabs.List className={styles.tabList}>
        <Tabs.Trigger value='all' className={styles.tabTrigger}>
          All
        </Tabs.Trigger>
        <Tabs.Trigger value='zenn' className={styles.tabTrigger}>
          Zenn
        </Tabs.Trigger>
        <Tabs.Trigger value='note' className={styles.tabTrigger}>
          note
        </Tabs.Trigger>
        <Tabs.Trigger value='book' className={styles.tabTrigger}>
          読書日記
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value='all'>
        <ul className={styles.blogCardLinkContainers}>
          {blogMockData.map((i) => (
            <li key={i.url} className={styles.blogCardContainer}>
              <BlogCard
                title={i.title}
                publishedAt={i.publishedAt}
                url={i.url}
                favicon={i.favicon}
                site={i.site}
              />
            </li>
          ))}
        </ul>
      </Tabs.Content>
      <Tabs.Content value='zenn'>
        <ul className={styles.blogCardLinkContainers}>
          {blogMockData.map((i) => (
            <li key={i.url} className={styles.blogCardContainer}>
              <BlogCard
                title={i.title}
                publishedAt={i.publishedAt}
                url={i.url}
                favicon={i.favicon}
                site={i.site}
              />
            </li>
          ))}
        </ul>
      </Tabs.Content>
      <Tabs.Content value='note'>
        <p>note</p>
      </Tabs.Content>
      <Tabs.Content value='book'>
        <p>読書日記</p>
      </Tabs.Content>
    </Tabs.Root>
  </>
)

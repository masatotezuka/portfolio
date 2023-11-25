'use client'
import { FC } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as styles from './blog.css'
import { BlogCard } from './BlogCard'
import { BlogData } from '@/scripts/index'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
dayjs.extend(timezone)

type BlogProps = {
  blogData: Record<'zenn' | 'note' | 'notion', BlogData[]>
}

export const Blog: FC<BlogProps> = ({ blogData }) => {
  // a,bで比較して、bを前に並び多ければ、bの方が大きければ1を返すようにする
  const blogList = [...blogData['zenn'], ...blogData['note'], ...blogData['notion']].sort((a, b) =>
    b.isoDate > a.isoDate ? 1 : -1
  )

  return (
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
          {blogList.map((i) => (
            <li key={i.link} className={styles.blogCardContainer}>
              <BlogCard
                title={i.title ?? 'no title'}
                publishedAt={dayjs.tz(i.isoDate, 'Asia/Tokyo').format('YYYY/MM/DD') ?? 'no date'}
                url={i.link ?? 'no link'}
                favicon={i.favicon ?? 'no favicon'}
                site={i.site}
                thumbnail={i.image ?? 'no image'}
              />
            </li>
          ))}
        </ul>
      </Tabs.Content>
      <Tabs.Content value='zenn'>
        <ul className={styles.blogCardLinkContainers}>
          {blogData['zenn'].map((i) => (
            <li key={i.link} className={styles.blogCardContainer}>
              <BlogCard
                title={i.title ?? 'no title'}
                publishedAt={dayjs.tz(i.isoDate, 'Asia/Tokyo').format('YYYY/MM/DD') ?? 'no date'}
                url={i.link ?? 'no link'}
                favicon={i.favicon ?? 'no favicon'}
                site={i.site}
                thumbnail={i.image ?? 'no image'}
              />
            </li>
          ))}
        </ul>
      </Tabs.Content>
      <Tabs.Content value='note'>
        <ul className={styles.blogCardLinkContainers}>
          {blogData['note'].map((i) => (
            <li key={i.link} className={styles.blogCardContainer}>
              <BlogCard
                title={i.title ?? 'no title'}
                publishedAt={dayjs.tz(i.isoDate, 'Asia/Tokyo').format('YYYY/MM/DD') ?? 'no date'}
                url={i.link ?? 'no link'}
                favicon={i.favicon ?? 'no favicon'}
                site={i.site}
                thumbnail={i.image ?? 'no image'}
              />
            </li>
          ))}
        </ul>
      </Tabs.Content>
      <Tabs.Content value='book'>
        <ul className={styles.blogCardLinkContainers}>
          {blogData['notion'].map((i) => (
            <li key={i.link} className={styles.blogCardContainer}>
              <BlogCard
                title={i.title ?? 'no title'}
                publishedAt={dayjs.tz(i.isoDate, 'Asia/Tokyo').format('YYYY/MM/DD') ?? 'no date'}
                url={i.link ?? 'no link'}
                favicon={i.favicon ?? 'no favicon'}
                site={i.site}
                thumbnail={i.image ?? 'no image'}
              />
            </li>
          ))}
        </ul>
      </Tabs.Content>
    </Tabs.Root>
  )
}

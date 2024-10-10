import { writeFileSync } from 'fs'
import Parser from 'rss-parser'
import {
  ZENN_FEED_URL,
  ZENN_FAVICON_URL,
  NOTE_FEED_URL,
  NOTE_FAVICON_URL,
  NOTION_API_URL,
  NOTION_FAVICON_URL
} from '../constants'

const parser = new Parser({
  customFields: {
    item: [['media:thumbnail', 'image']]
  }
})

export type BlogData = {
  site: string
  favicon: string
  title?: string
  link?: string
  image?: string
  content?: string
  isoDate: string
}

const rssFeed = {
  zenn: {
    label: 'Zenn',
    url: ZENN_FEED_URL,
    favicon: ZENN_FAVICON_URL
  },
  note: {
    label: 'note',
    url: NOTE_FEED_URL,
    favicon: NOTE_FAVICON_URL
  }
}

const fetchRssFeed = async () => {
  const blogData: Record<string, BlogData[]> = {}
  await Promise.all(
    Object.entries(rssFeed).map(async ([site, info]) => {
      const items: BlogData[] = (await parser.parseURL(info.url)).items.map((item) => {
        return {
          site: info.label,
          favicon: info.favicon,
          title: item.title,
          link: item.link,
          content: item.content,
          image: item.image ?? item.enclosure?.url,
          isoDate: item.isoDate ?? 'no date'
        }
      })
      blogData[site] = items
    })
  )
  return blogData
}

const fetchNotionData = async (): Promise<{ notion: BlogData[] }> => {
  const res = await fetch(NOTION_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NOTION_API_TOKEN}`,
      'Notion-Version': '2022-06-28'
    }
  })
  const json = await res.json()
  console.log(json, 'json')
  const items = json.results.map((item: any) => {
    return {
      site: 'notion',
      favicon: NOTION_FAVICON_URL,
      title: item.properties.Name.title[0].plain_text ?? undefined,
      link: item.public_url ?? undefined,
      content: undefined,
      image: item.cover?.file.url ?? undefined,
      isoDate: item.created_time ?? undefined
    }
  })
  return {
    notion: items
  }
}

;(async () => {
  try {
    const [rssData, notionData] = await Promise.all([fetchRssFeed(), fetchNotionData()])
    const blogData = { ...rssData, ...notionData }
    writeFileSync('./data/blog.json', JSON.stringify(blogData))
  } catch (error) {
    console.error(error)
  }
})()

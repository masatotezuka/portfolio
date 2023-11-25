import { readFile } from 'fs/promises'
import path from 'path'
import { BlogData } from '@/scripts'
export const useBlogData = async () => {
  const files = await readFile(path.join(__dirname, '../../../data/blog.json'))
  const blogData: Record<string, BlogData[]> = JSON.parse(files.toString())
  return { blogData }
}

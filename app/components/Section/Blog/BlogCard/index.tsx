import React, { FC } from 'react'
import * as styles from './blogCard.css'
import Link from 'next/link'
import Image from 'next/image'
type BlogCardProps = {
  title: string
  publishedAt: string
  url: string
  favicon: string
  site: string
  thumbnail?: string
}

export const BlogCard: FC<BlogCardProps> = ({
  title,
  publishedAt,
  url,
  favicon,
  site,
  thumbnail
}) => {
  return (
    <Link className={styles.container} href={url} target='_blank' rel='noopener noreferrer'>
      <div className={styles.blogContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.publishedAt}>{publishedAt}</p>
        <div className={styles.siteContainer}>
          <Image src={favicon} alt={site} width={100} height={100} className={styles.image} />
          <p className={styles.site}>{site}</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        {thumbnail ? (
          <Image src={thumbnail} alt={site} width={300} height={300} className={styles.thumbnail} />
        ) : (
          <Image src={favicon} alt={site} width={300} height={300} className={styles.thumbnail} />
        )}
      </div>
    </Link>
  )
}

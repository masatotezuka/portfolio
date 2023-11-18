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
}

export const BlogCard: FC<BlogCardProps> = ({ title, publishedAt, url, favicon, site }) => {
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
      <div>
        <Image
          src={
            'https://res.cloudinary.com/zenn/image/upload/s--gP8x7LTZ--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E3%2583%2587%25E3%2583%25BC%25E3%2582%25BF%25E3%2583%2599%25E3%2583%25BC%25E3%2582%25B9%25E8%25A8%25AD%25E8%25A8%2588%25E3%2581%25AB%25E5%25BC%25B7%25E3%2581%258F%25E3%2581%25AA%25E3%2582%258B%25E3%2581%259F%25E3%2582%2581%25E3%2581%25AE%25E7%25AC%25AC%25E4%25B8%2580%25E6%25AD%25A9%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:masatotezuka%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2M4NmI3YThiOGIuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png'
          }
          alt={site}
          width={300}
          height={300}
          className={styles.thumbnail}
        />
      </div>
    </Link>
  )
}

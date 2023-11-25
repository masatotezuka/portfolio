import * as dotenv from 'dotenv'
dotenv.config()
export const SECTION_LIST = {
  ABOUT: {
    title: 'About',
    sectionLabel: 'about',
    navLabel: 'ABOUT'
  },
  BIO: {
    title: 'Bio',
    sectionLabel: 'bio',
    navLabel: 'BIO'
  },
  SKILLS: {
    title: 'Skills',
    sectionLabel: 'skills',
    navLabel: 'SKILLS'
  },
  BLOG: {
    title: 'Blog',
    sectionLabel: 'blog',
    navLabel: 'BLOG'
  },
  WORKS: {
    title: 'Works',
    sectionLabel: 'works',
    navLabel: 'WORKS'
  }
}

export const SKILL_LIST = [
  {
    name: 'TypeScript',
    image: '/skills/typescript-icon.svg'
  },
  {
    name: 'JavaScript',
    image: '/skills/javascript.svg'
  },

  {
    name: 'Node.js',
    image: '/skills/nodejs.png'
  },
  {
    name: 'Express',
    image: '/skills/express.svg'
  },
  {
    name: 'NestJS',
    image: '/skills/nestjs.svg'
  },
  {
    name: 'Next.js',
    image: '/skills/nextjs-icon.svg'
  },
  {
    name: 'React',
    image: '/skills/react.svg'
  },
  {
    name: 'Prisma',
    image: '/skills/prisma.svg'
  },
  {
    name: 'TypeORM',
    image: '/skills/typeorm.svg'
  },
  {
    name: 'Sequelize',
    image: '/skills/sequelize.svg'
  },

  {
    name: 'MySQL',
    image: '/skills/mysql.svg'
  },
  {
    name: 'PostgreSQL',
    image: '/skills/postgresql.svg'
  }
]

export const LINK_LIST = [
  {
    name: 'GitHub',
    image: '/links/github-mark.svg',
    url: 'https://github.com/masatotezuka'
  },
  {
    name: 'x',
    image: '/links/x-logo.png',
    url: 'https://twitter.com/tezmasatoo'
  },
  {
    name: 'note',
    image: '/links/note-icon.svg',
    url: 'https://note.com/mst_tez'
  },
  {
    name: 'zenn',
    image: '/links/zenn-logo.svg',
    url: 'https://zenn.dev/masatotezuka'
  },
  {
    name: 'facebook',
    image: '/links/facebook-logo.png',
    url: 'https://www.facebook.com/profile.php?id=100022391745587'
  }
]

export const ZENN_FEED_URL = 'https://zenn.dev/masatotezuka/feed'
export const NOTE_FEED_URL = 'https://note.com/mst_tez/rss'
export const ZENN_FAVICON_URL = 'https://zenn.dev/images/logo-transparent.png'
export const NOTE_FAVICON_URL =
  'https://assets.st-note.com/poc-image/manual/note-common-images/production/svg/production.ico'
export const NOTION_FAVICON_URL = 'https://www.notion.so/images/favicon.ico'
export const NOTION_API_URL = `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`

import RSS from 'rss'
import { GetServerSidePropsContext } from 'next'

import { indexQuery } from '../lib/queries'
import { sanityClient } from '../lib/sanity-server'
import { Post } from '../@types/post'

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const feed = new RSS({
    title: 'teka | Marcelo Oliveira',
    site_url: 'https://teka.dev',
    feed_url: 'https://teka.dev/feed.xml',
  })

  const allPosts = await sanityClient.fetch(indexQuery)
  allPosts.map((post: Post) => {
    feed.item({
      title: post.title,
      url: `https://teka.dev/blog/${post.slug}`,
      date: post.date,
      description: post.excerpt,
    })
  })

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')
  res.write(feed.xml({ indent: true }))
  res.end()

  return {
    props: {},
  }
}

export default function RSSFeed() {
  return null
}

import { InferGetStaticPropsType } from 'next'
import { allBlogs } from '.contentlayer/data'

import { Container, Layout } from '../components'
import { pick } from '../lib/utils'
import { HomeHero } from '../components/Organisms/HomeHero'
import { RecentPosts } from '../components/Organisms/RecentPosts'

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <HomeHero />

      <Container>
        <RecentPosts posts={posts} />
      </Container>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

  return { props: { posts } }
}

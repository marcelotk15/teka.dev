import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
// import { allBlogs } from '.contentlayer/data'

import { Container } from '../components/Atoms/Container'
import { HomeHero } from '../components/Organisms/HomeHero'
import { RecentPosts } from '../components/Organisms/RecentPosts'
import { MainLayout } from '../layouts/MainLayout'
import { Post } from '../@types/post'
import { getClient } from '../lib/sanity-server'
import { indexQuery } from '../lib/queries'

export default function HomePage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      <HomeHero />

      <Container>
        <RecentPosts posts={posts} />
      </Container>
    </MainLayout>
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext) {
  const posts: Post[] = await getClient(preview).fetch(indexQuery)

  return { props: { posts } }
}

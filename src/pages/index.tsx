import { Suspense } from 'react'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { HomeHero } from '@components/Organisms/HomeHero'
import { Container } from '@components/Atoms/Container'
import { RecentPosts } from '@components/Organisms/RecentPosts'
import { MainLayout } from '@layouts/MainLayout'
import { getClient } from '@lib/sanity-server'
import { indexQuery } from '@lib/queries'
import { mdxToHtml } from '@lib/mdx'
import { Post } from '@local-types/post'

export async function getStaticProps({ locale, preview = false }: GetStaticPropsContext) {
  const posts: Post[] = await getClient(preview).fetch(indexQuery)

  const parsedPosts = []

  for await (const post of posts) {
    const content = {
      en: post.content || post.content_ptBR,
      'pt-BR': post.content_ptBR || post.content,
    }[locale || 'en']

    const { html, readingTime } = await mdxToHtml(content as unknown as string)

    parsedPosts.push({
      slug: post.slug,
      title: html.frontmatter?.title || post.title,
      excerpt: html.frontmatter?.description || post.excerpt,
      readingTime,
    })
  }

  return { props: { posts: parsedPosts } }
}

export default function HomePage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Suspense fallback={null}>
      <MainLayout>
        <HomeHero />

        <Container>
          <RecentPosts posts={posts} />
        </Container>
      </MainLayout>
    </Suspense>
  )
}

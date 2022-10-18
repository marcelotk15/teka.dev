import { parseISO, format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote'
import { GetStaticPropsContext } from 'next'

import { Box } from '@components/Atoms/Box'
import { Container } from '@components/Atoms/Container'
import { Heading } from '@components/Atoms/Heading'
import { Text } from '@components/Atoms/Text'
import { MDXComponents } from '@components/Organisms/MDXComponents'
import { getClient, sanityClient } from '@lib/sanity-server'
import { postQuery, postSlugsQuery } from '@lib/queries'
import { mdxToHtml } from '@lib/mdx'
import { Post } from '@types/post'
import { ViewCounter } from '@components/Molecules/ViewCounter'
import { MainLayout } from '@layouts/MainLayout'

interface PostProps {
  post: Post
}

export default function PostPage({ post }: PostProps) {
  return (
    <MainLayout title={`${post.title} | teka - Marcelo Oliveira`} description={post.excerpt}>
      <Container>
        <Heading size={'lg'} css={{ mt: '$4' }} as="h1">
          {post.title}
        </Heading>

        <Box items="center" gap={3} css={{ mt: '$4', mb: '$8' }}>
          <Text>Marcelo Oliveira</Text>

          <Text color="gray">•</Text>

          <Text color="gray">{format(parseISO(post.date), 'MMMM dd, yyyy')}</Text>

          <Text color="gray">-</Text>

          <Text color="gray" size="sm">
            {post.readingTime}
          </Text>

          <Text color="gray" size="sm">
            •
          </Text>

          <ViewCounter slug={post.slug} />
        </Box>

        <Box column>
          <MDXRemote {...post.content} components={{ ...(MDXComponents as any) }} />
        </Box>
      </Container>
    </MainLayout>
  )
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params, preview = false }: GetStaticPropsContext) {
  if (!params) {
    return { notFound: true }
  }

  const { post } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  if (!post) {
    return { notFound: true }
  }

  const { html, readingTime } = await mdxToHtml(post.content)
  // const tweets = await getTweets(tweetIds);

  return {
    props: {
      post: {
        ...post,
        content: html,
        readingTime,
      },
    },
  }
}

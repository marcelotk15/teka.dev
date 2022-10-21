import { parseISO, format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote'
import { GetStaticPropsContext } from 'next'
import { Suspense } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import brazilLocale from 'date-fns/locale/pt-BR'

import { Box } from '@components/Atoms/Box'
import { Container } from '@components/Atoms/Container'
import { Heading } from '@components/Atoms/Heading'
import { Text } from '@components/Atoms/Text'
import { MDXComponents } from '@components/Organisms/MDXComponents'
import { getClient, sanityClient } from '@lib/sanity-server'
import { postQuery, postSlugsQuery } from '@lib/queries'
import { mdxToHtml } from '@lib/mdx'
import { Post } from '@local-types/post'
import { ViewCounter } from '@components/Molecules/ViewCounter'
import { MainLayout } from '@layouts/MainLayout'

interface PostProps {
  post: Post
}

export default function PostPage({ post }: PostProps) {
  const { t } = useTranslation()

  const { locale } = useRouter()

  return (
    <MainLayout
      title={`${post.content.frontmatter?.title} - teka • Marcelo Oliveira`}
      description={post.content.frontmatter?.description}
    >
      <Container>
        <Heading size={'lg'} css={{ mt: '$4' }} as="h1">
          {post.content.frontmatter?.title}
        </Heading>

        <Box column gap={2} css={{ mt: '$4', mb: '$8' }}>
          <Box gap={3}>
            <Text>Marcelo Oliveira</Text>

            <Text color="gray">•</Text>

            <Text color="gray">
              {format(parseISO(post.date), t('blog:createdDateFormat'), {
                locale: locale === 'pt-BR' ? brazilLocale : undefined,
              })}
            </Text>
          </Box>

          <Box gap={3}>
            <Text color="gray" size="sm">
              {t('blog:readTime', { time: Math.ceil(post.readingTime.minutes) })}
            </Text>

            <Text color="gray" size="sm">
              •
            </Text>

            <ViewCounter slug={post.slug} />
          </Box>
        </Box>

        <Suspense fallback={null}>
          <Box column>
            <MDXRemote {...post.content} components={{ ...(MDXComponents as any) }} />
          </Box>
        </Suspense>
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

export async function getStaticProps({ params, locale, preview = false }: GetStaticPropsContext) {
  if (!params) {
    return { notFound: true }
  }

  const { post } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  if (!post) {
    return { notFound: true }
  }

  const { content, content_ptBR } = post

  const { html, readingTime } = await mdxToHtml(locale === 'en' ? content : content_ptBR)
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

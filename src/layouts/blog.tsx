import Image from 'next/image'
import { parseISO, format } from 'date-fns'
import type { PropsWithChildren } from 'react'
import type { Blog } from '.contentlayer/types'

import { styled } from '@theme'
import { Container, Flex, P, SocialShare, TableOfContents } from '@/src/components'

import { Box } from '../components/Atoms/Box'

// import Container from 'components/Container';
// import Subscribe from 'components/Subscribe';
// import ViewCounter from 'components/ViewCounter';

const editUrl = (slug: string) => `https://github.com//leerob.io/edit/main/data/blog/${slug}.mdx`
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://teka.dev/blog/${slug}`)}`

const BlogLayoutStyled = styled(Box, {
  display: 'grid',
  gridGap: '$0',
  gridTemplateColumns: '1fr',
  width: '$full',

  '@desktop': {
    gridTemplateColumns: '2fr 1fr',
    gridGap: '$24',
  },
})

const Article = styled('div', {
  width: '$full',
  overflowX: 'hidden',
})

const RightBar = styled('div', {
  display: 'none',
  position: 'sticky',
  top: '$24',
  height: '100vh',
  overflow: 'auto',

  '@desktop': {
    display: 'block',
  },
})

const BlogMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '$full',
  mt: '$2',

  '@desktop': {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

const BlogInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const BlogContent = styled('article', {
  width: '$full',
  mt: '$4',
  fontSize: '$0',
  lineHeight: '1.75',

  p: {
    my: '$5',
  },

  table: {
    width: '$full',
    tableLayout: 'auto',
    textAlign: 'left',
    my: '2em',
    fontSize: '$-2',
    lineHeight: '$base',

    thead: {
      borderBottomColor: '$cyan4',
      borderBottomWidth: '1px',
      // borderBottom: '1px solid $slate4',

      th: {
        fontWeight: 'semibold',
        verticalAlign: 'bottom',
        pr: '$1',
        pb: '$1',
      },
    },

    tbody: {
      tr: {
        '&:not(:last-child)': {
          borderBottom: '1px solid $slateA4',
        },

        td: {
          padding: '$1',

          '&:not(:last-child)': {
            paddingLeft: '$0',
          },
        },
      },
    },
  },
})

export default function BlogLayout({ children, post }: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container>
      <BlogLayoutStyled>
        <Article>
          <P
            font={'heading'}
            as={'h1'}
            weight={'bold'}
            size={{ '@initial': '10', '@desktop': '11' }}
            css={{ mb: '$4' }}
          >
            {post.title}
          </P>

          <BlogMain>
            <BlogInfo>
              <Image
                alt="Lee Robinson"
                height={24}
                width={24}
                src="/avatar.jpg"
                className="rounded-full"
              />

              <P css={{ color: '$slate11' }}>
                {'Marcelo Oliveira / '}
                {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
              </P>
            </BlogInfo>

            <P css={{ color: '$slate11', mt: '$2' }} size={'-2'}>
              {post.readingTime.text}
              {` • `}
              {/* <ViewCounter slug={post.slug} /> */}
            </P>
          </BlogMain>

          <BlogContent>{children}</BlogContent>

          <div className="mt-8">{/* <Subscribe /> */}</div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <a href={discussUrl(post.slug)} target="_blank" rel="noopener noreferrer">
              {'Discuss on Twitter'}
            </a>
            {` • `}
            <a href={editUrl(post.slug)} target="_blank" rel="noopener noreferrer">
              {'Edit on GitHub'}
            </a>
          </div>
        </Article>

        <RightBar>
          <Flex flexDirection="column" css={{ gap: '$6' }}>
            <TableOfContents source={post.body.raw} />

            <SocialShare title={post.title} />
          </Flex>
        </RightBar>
      </BlogLayoutStyled>
    </Container>
  )
}

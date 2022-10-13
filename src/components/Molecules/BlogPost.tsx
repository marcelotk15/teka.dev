import Link from 'next/link'
import type { Blog } from '.contentlayer/types'

import { styled } from '@theme'

import { Text } from '../Atoms/Text'
import { Heading } from '../Atoms/Heading'

// import useSWR from 'swr';
// import fetcher from 'lib/fetcher';
// import { Views } from 'lib/types';

const Wrapper = styled('a', {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  background: '$slate3',
  gap: '$4',
  transition: 'transform .15s',
  position: 'relative',
  borderRadius: '$2',
  padding: '$4',
  overflow: 'hidden',

  '&:hover': {
    transform: 'scale(1.05)',
    background: '$slate4',
  },
})

const Title = styled(Heading, {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  backgroundImage:
    '-webkit-linear-gradient(135deg, #ce4de9, #ff3fa8, #ff4f8a, #ff666f, #ff7e5b, #f4aa4b)',
  backgroundClip: 'text',
  color: 'transparent',
})

const Content = styled(Text, {
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  marginTop: 'auto',
})

type BlogPostProps = Pick<Blog, 'title' | 'summary' | 'slug'>

export function BlogPost({ title, summary, slug }: BlogPostProps) {
  // const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  // const views = data?.total;

  return (
    <Link href={`/blog/${slug}`} passHref>
      <Wrapper aria-label={title}>
        <Title as="h3" size={'sm'}>
          {title}
        </Title>

        <Content color="gray">{summary}</Content>
      </Wrapper>
    </Link>
  )
}

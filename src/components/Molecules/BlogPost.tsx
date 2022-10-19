import useSWR from 'swr'
import { Eye } from 'phosphor-react'

import { styled } from '@theme'
import { Heading } from '@components/Atoms/Heading'
import { Text } from '@components/Atoms/Text'
import { Post } from '@local-types/post'
import { Link } from '@components/Atoms/Link'
import { Box } from '@components/Atoms/Box'
import fetcher from '@lib/fetcher'
import { Views } from '@local-types/views'

const Wrapper = styled(Box, {
  display: 'flex',
  background: '$slate3',
  transition: 'all .2s ease-in-out',
  position: 'relative',
  borderRadius: '$2',
  padding: '$6',
  overflow: 'hidden',
  border: '1px solid $slate5',

  '&:hover': {
    background: '$slate4',
    padding: '$4 $6 $8',
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

const Views = styled(Box, {
  color: '$slate11',
  mt: '$1',
})

type BlogPostProps = Pick<Post, 'title' | 'excerpt' | 'slug'>

export function BlogPost({ title, excerpt, slug }: BlogPostProps) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)
  const views = data?.total || '-'

  return (
    <Link href={`/blog/${slug}`} title={title} withoutUnderline>
      <Wrapper column gap={4}>
        <Title as="h3" size={'sm'}>
          {title}
        </Title>

        <Content>{excerpt}</Content>

        <Views gap={2} title={`Total of view on article '${title}'`}>
          <Eye size={16} />

          <Text size={'sm'} color="inherit">
            {views}
          </Text>
        </Views>
      </Wrapper>
    </Link>
  )
}

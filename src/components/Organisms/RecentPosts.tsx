import Link from 'next/link'
import type { Blog } from '.contentlayer/types'
import { ArrowRight } from 'phosphor-react'

import { styled } from '@theme'

import { BlogPost } from '../Molecules/BlogPost'
import { Section } from '../Molecules/Sections'
import { Text } from '../Atoms/Text'

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const Posts = styled('div', {
  display: 'flex',
  gap: '$6',
  flexDirection: 'column',
  color: '$hiContrast',

  '@desktop': {
    flexDirection: 'row',
  },
})

const ReadAll = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  mt: '$4',
  transition: 'gap, color .2s',
  color: '$hiContrast',

  '&:hover': {
    color: '$slate10',
    gap: '$4',
  },
})

interface RecentPostsProps {
  posts: Pick<Blog, 'title' | 'summary' | 'slug' | 'publishedAt'>[]
}

export function RecentPosts({ posts }: RecentPostsProps) {
  const postsObject = posts?.length >= 3 ? posts.slice(0, 3) : posts

  return (
    <Section title="Recent Post">
      <Wrapper>
        <Posts>
          {postsObject.map((blog) => (
            <BlogPost key={blog.slug} {...blog} />
          ))}
        </Posts>

        <Link href="/blog" passHref>
          <ReadAll>
            <Text color={'inherit'}>Read all posts</Text>

            <ArrowRight size={18} weight="duotone" />
          </ReadAll>
        </Link>
      </Wrapper>
    </Section>
  )
}

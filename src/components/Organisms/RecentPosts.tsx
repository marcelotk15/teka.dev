import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { ArrowRight } from 'phosphor-react'

import { styled } from '@theme'
import { BlogPost } from '@components/Molecules/BlogPost'
import { Section } from '@components/Molecules/Sections'
import { Text } from '@components/Atoms/Text'
import { Box } from '@components/Atoms/Box'
import type { Post } from '@local-types/post'

const Posts = styled(Box, {
  flexDirection: 'column',
  color: '$hiContrast',

  '@lg': {
    flexDirection: 'row',
  },
})

const ReadAll = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  mt: '$4',
  transition: 'all .2s ease-in-out',
  color: '$hiContrast',

  '&:hover': {
    color: '$slate10',
    gap: '$4',
  },
})

interface RecentPostsProps {
  posts: Pick<Post, 'title' | 'excerpt' | 'slug' | 'date'>[]
}

export function RecentPosts({ posts }: RecentPostsProps) {
  const { t } = useTranslation()

  const postsObject = posts?.length >= 3 ? posts.slice(0, 3) : posts

  return (
    <Section title={t('common:post.recent')}>
      <Box column>
        <Posts gap={6}>
          {postsObject.map((blog) => (
            <BlogPost key={blog.slug} {...blog} />
          ))}
        </Posts>

        <Link href="/blog" passHref>
          <ReadAll>
            <Text color={'inherit'}>{t('common:post.readAll')}</Text>

            <ArrowRight size={18} weight="duotone" />
          </ReadAll>
        </Link>
      </Box>
    </Section>
  )
}

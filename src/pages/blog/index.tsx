import { InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { allBlogs } from '.contentlayer/data'
import { MagnifyingGlass } from 'phosphor-react'

import { Container, Layout } from '@/src/components'
import { Section } from '@/src/components/Molecules/Sections'
import { BlogPost } from '@/src/components/Molecules/BlogPost'
import { pick } from '@/src/lib/utils'
import { TextInput } from '@/src/components/Atoms/TextInput'
import { Text } from '@/src/components/Atoms/Text'
import { Box } from '@/src/components/Atoms/Box'
import { SubSection } from '@/src/components/Molecules/SubSection'

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  )

  return (
    <Layout title="teka's blog">
      <Container>
        <Section title={'Blog'}>
          <Text>
            {`I've been writing online since 2022, mostly about web development and tech careers.
            In total, I've written ${posts.length} articles on my blog.
            Use the search below to filter by title.`}
          </Text>

          <TextInput.Root>
            <TextInput.Input
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
            />

            <TextInput.Icon>
              <MagnifyingGlass weight="duotone" size={16} />
            </TextInput.Icon>
          </TextInput.Root>

          {!searchValue && (
            <SubSection title="Most Popular">
              <Box gap={4}>
                <BlogPost
                  title="Rust Is The Future of JavaScript Infrastructure"
                  summary="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
                  slug="rust"
                />
                <BlogPost
                  title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
                  summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
                  slug="style-guides-component-libraries-design-systems"
                />
                <BlogPost
                  title="Creating a Monorepo with Lerna & Yarn Workspaces"
                  summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
                  slug="monorepo-lerna-yarn-workspaces"
                />
              </Box>
            </SubSection>
          )}

          <SubSection title="All posts">
            {!filteredBlogPosts.length ? (
              <Box justify="center">
                <Text size="lg" weight={'bold'} color="gray">
                  No posts found.
                </Text>
              </Box>
            ) : (
              filteredBlogPosts.map((post) => <BlogPost key={post.title} {...post} />)
            )}
          </SubSection>
        </Section>
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

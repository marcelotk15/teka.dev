import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import { Section } from '@components/Molecules/Sections'
import { BlogPost } from '@components/Molecules/BlogPost'
import { TextInput } from '@components/Atoms/TextInput'
import { Text } from '@components/Atoms/Text'
import { Box } from '@components/Atoms/Box'
import { Container } from '@components/Atoms/Container'
import { SubSection } from '@components/Molecules/SubSection'
import { indexQuery } from '@lib/queries'
import { getClient } from '@lib/sanity-server'
import { Post } from '@local-types/post'
import { MainLayout } from '@layouts/MainLayout'

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  )

  return (
    <MainLayout title="Blog | teka - Marcelo Oliveira">
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
              <Box column gap={4} css={{ '@lg': { flexDirection: 'row' } }}>
                <BlogPost
                  title="Rust Is The Future of JavaScript Infrastructure"
                  excerpt="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
                  slug="rust"
                />
                <BlogPost
                  title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
                  excerpt="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
                  slug="style-guides-component-libraries-design-systems"
                />
                <BlogPost
                  title="Creating a Monorepo with Lerna & Yarn Workspaces"
                  excerpt="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
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
    </MainLayout>
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext) {
  const posts: Post[] = await getClient(preview).fetch(indexQuery)

  return { props: { posts } }
}

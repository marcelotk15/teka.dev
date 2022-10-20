import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Suspense, useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import useTranslation from 'next-translate/useTranslation'

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
  const { t } = useTranslation()

  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  )

  return (
    <MainLayout title="Blog | teka • Marcelo Oliveira" description={t('blog:metaDescription')}>
      <Container>
        <Section title={'Blog'}>
          <Text>{t('blog:description', { count: posts.length })}</Text>

          <TextInput.Root>
            <TextInput.Input
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={t('blog:searchPlaceholder')}
            />

            <TextInput.Icon>
              <MagnifyingGlass weight="duotone" size={16} />
            </TextInput.Icon>
          </TextInput.Root>

          {!searchValue && (
            <SubSection title={t('blog:mostPopular')}>
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

          <Suspense fallback={null}>
            <SubSection title={t('blog:allPosts')}>
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
          </Suspense>
        </Section>
      </Container>
    </MainLayout>
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext) {
  const posts: Post[] = await getClient(preview).fetch(indexQuery)

  return { props: { posts } }
}

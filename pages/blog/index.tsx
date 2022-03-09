import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';

import { allBlogs } from ".contentlayer/data";
import { pick } from "@/lib/utils";
import { BlogPost, Container, Layout, P, Section } from '@/components';

import { styled } from "@theme";

const SearchStyled = styled('div', {
  position: 'relative',
  width: '$full',
  mb: '$4',

  svg: {
    size: '$5',
    top: '50%',
    right: '$3',
    transform: 'translateY(-50%)',
    position: 'absolute'
  }
});

const SearchInput = styled('input', {
  display: 'block',
  width: '$full',
  px: '$4',
  py: '$2',
  color: '$slate12',
  borderRadius: '$2',
  backgroundColor: '$slate4',
  border: '1px solid $slate14',
  fontSize: '100%',
  lineHeight: 'inherit'
});

const SubSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  mb: '$12',

  '&:last-child': {
    mb: '$0'
  }
});

export default function Blog ({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  return (
    <Layout title="teka's blog">
      <Container>
        <Section title={'Blog'}>
          <P margin={'none'} css={{ mb: '$3', color: '$hiContrast' }}>
          {`I've been writing online since 2022, mostly about web development and tech careers.
            In total, I've written ${posts.length} articles on my blog.
            Use the search below to filter by title.`}
          </P>

          <SearchStyled className="relative w-full mb-4">
            <SearchInput
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />

            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </SearchStyled>

          {!searchValue && (
            <SubSection>
              <P size={{ '@initial': '8', '@desktop': '10' }} margin={"none"} weight={'bold'} font={'heading'} as="h3">
                Most Popular
              </P>

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
            </SubSection>
          )}

          <SubSection>
            <P size={{ '@initial': '8', '@desktop': '10' }} margin={"none"} weight={'bold'} font={'heading'} as="h3">
              All posts
            </P>

            {!filteredBlogPosts.length && (
              <P margin={"none"} css={{ mb: '$4', color: '$slate11' }}>
                No posts found.
              </P>
            )}

            {filteredBlogPosts.map((post) => (
              <BlogPost key={post.title} {...post} />
            ))}
          </SubSection>

        </Section>
      </Container>
    </Layout>
  );
};

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}

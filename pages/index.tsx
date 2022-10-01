import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { allBlogs } from '@/.contentlayer/data';
import { Container, Layout, Section } from '@/components';
import { HomeHello } from '@/contents';
import RecentPosts from '@/components/recentPost';
import { pick } from '@/lib/utils';
import { styled } from "@theme";

const LinkStyled = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  color: '$slate11',
  cursor: 'pointer',
  mt: '$8',

  '&:hover': {
    color: '$slate12'
  },

  svg: {
    size: '$6',
    fill: 'inherit'
  }
});

export default function Home ({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Container>
        <HomeHello />

        <Section title='Recent Post'>
          {posts?.length >= 3 ? (
            <RecentPosts posts={posts.slice(0, 3)} />
          ) : (
            <RecentPosts posts={posts} />
          )}
          
          <LinkStyled as={'a'} href="/blog">
            Read all posts
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"></path>
            </svg>
          </LinkStyled>
        </Section>
      </Container>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}

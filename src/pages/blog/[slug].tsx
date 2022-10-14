import { useMDXComponent } from 'next-contentlayer/hooks'
import { GetStaticProps } from 'next'
import { allBlogs } from '.contentlayer/data'
import type { Blog } from '.contentlayer/types'

import { Container, Layout } from '@/src/components'
import BlogLayout from '@/src/layouts/blog'
import components from '@/src/components/mdxComponents'

// import { postFilePaths, POSTS_PATH } from "@/libs/utils";
// import { styled } from '@theme';
// import { postFilePaths, POSTS_PATH } from '@/lib/utils';
// import { readFileSync } from 'fs';
// import path from "path";
// import matter from 'gray-matter';
// import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
// import { serialize } from 'next-mdx-remote/serialize';
// import Head from 'next/head';

export default function Post({ post }: { post: Blog }) {
  const Component = useMDXComponent(post.body.code)

  // const StaticTweet = ({ id }) => {
  //   const tweet = tweets.find((tweet) => tweet.id === id);
  //   return <Tweet {...tweet} />;
  // };

  return (
    <Layout title="teka's blog">
      <Container css={{ width: '72rem' }}>
        <BlogLayout post={post}>
          <Component components={{ ...components }} />
        </BlogLayout>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allBlogs.find(({ slug }) => slug === params?.slug)
  // const tweets = await getTweets(post.tweetIds);

  return { props: { post } }
}

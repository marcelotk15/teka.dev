import { readFileSync } from 'fs';
import path from "path";
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';

import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";

import { Container, P, CodeBlock } from '@/components';

import { styled } from '@theme';


const PostPageStyled = styled('div', {
  width: '$full'
});

const PostInfo = styled('div', {});

const PostContent = styled('main', {
  width: '$full',
  mt: '$12'
});

const components: any = {
  Head,
  pre: CodeBlock
}

type PostPageProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  frontMatter: { [key: string]: any }
}

export default function PostPage ({ source, frontMatter }: PostPageProps) {
  return (
    <Container>
      <PostPageStyled>
        <PostInfo>
          <P as={'h1'} font="heading" size="12">
            {frontMatter?.title}
          </P>

          {frontMatter?.description && (
            <P font="mono" size="2" css={{ color: '$slate11', mt: '$2' }} margin="none">
              {frontMatter.description}
            </P>
          )}
        </PostInfo>

        <PostContent>
          <MDXRemote {...source} components={components} />
        </PostContent>
      </PostPageStyled>
    </Container>
  );
}

export async function getStaticProps ({ params }: GetStaticPropsContext) {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    scope: data
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  };
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path: string) => path.replace(/\.mdx?$/, ''))
    .map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
}

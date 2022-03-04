import { readFileSync } from 'fs';
import path from "path";
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic'
import Head from 'next/head';
import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';

import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";

import { Container, P } from '@/components';

import { styled } from '@theme';


const PostPageStyled = styled('div', {});

const PostInfo = styled('div', {});

const PostContent = styled('main', {
  mt: '$12'
});

const Pre = styled('pre', {
  my: '$5',
  textAlign: 'left',
  // margin: '1em 0',
  padding: '$4',
  overflow: 'auto',
  borderRadius: '$2',
  boxShadow: '-15px 0 30px -10px var(--colors-orangeA7), 0 0 30px -10px var(--colors-pinkA7), 15px 0 30px -20px var(--colors-violetA7), 0 0 0 1px var(--colors-pinkA6)'
})

const Line = styled('div', {
  display: 'table-row',
});

const LineNo = styled('span', {
  display: 'table-cell',
  textAlign: 'right',
  pr: '1em',
  userSelect: 'none',
  opacity: .5
});

const LineContent = styled('span', {
  display: 'table-cell'
});

const components = {
  Head,
  pre: (props) => {
		const className = props.children.props.className || "";

		const matches = className.match(/language-(?<lang>.*)/);

		return (
			<Highlight
				{...defaultProps}
				code={props.children.props.children.trim()}
				language={ matches?.groups?.lang || ''}
        theme={dracula}
			>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
			</Highlight>
		);
	},
}

export default function PostPage ({ source, frontMatter }) {
  return (
    <Container>
      <PostPageStyled>
        <PostInfo>
          <P as={'h1'} font="heading" size="12">
            {frontMatter.title}
          </P>

          {frontMatter.description && (
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

export async function getStaticProps ({ params }) {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
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

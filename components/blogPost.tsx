import Link from 'next/link';
// import useSWR from 'swr';

// import fetcher from 'lib/fetcher';
// import { Views } from 'lib/types';
import type { Blog } from '.contentlayer/types';

import { styled } from '@theme';
import { P } from '.';

const BlogPostStyled = styled(Link, {
  width: '$full'
});

const BlogPostInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export function BlogPost({
  title,
  summary,
  slug
}: Pick<Blog, 'title' | 'summary' | 'slug'>) {
  // const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  // const views = data?.total;

  return (
    <BlogPostStyled href={`/blog/${slug}`} as="a">
      <P as={'h4'} font={'heading'} size={'3'}>
        {title}
      </P>

      <P css={{ color: '$slate11', mt: '$2' }}>
        {summary}
      </P>
    </BlogPostStyled>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMDXComponent } from 'next-contentlayer/hooks'

import { BlogPost } from 'contentlayer/generated'

import { ExternalLink } from '../ui/ExternalLink'
import { Link } from '../ui/Link'
import { Image } from './Image'

const components = {
  Image,
  a: (props: any) => <Link {...props} withUnderline />,
  ExternalLink: (props: any) => <ExternalLink {...props} showIcon withUnderline />,
}

interface MDXProps {
  post: BlogPost
}

export function Mdx({ post }: MDXProps) {
  const Component = useMDXComponent(post.body.code)

  return (
    <article className="prose max-w-full dark:prose-invert">
      <Component components={{ ...components }} />
    </article>
  )
}

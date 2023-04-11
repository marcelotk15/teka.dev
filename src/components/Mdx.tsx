import { useMDXComponent } from 'next-contentlayer/hooks'
import NextImage from 'next/image'

import { ExternalLink } from './ui/ExternalLink'
import { Link } from './ui/Link'

const Image = (props: any) => <NextImage {...props} loading="lazy" quality={100} />

const components = {
  a: (props: any) => <Link {...props} withUnderline />,
  ExternalLink: (props: any) => <ExternalLink {...props} showIcon withUnderline />,
  img: Image,
  p: (props: any) => <p {...props} />,
}

interface MdxProps {
  code: string
  // tweets: Record<string, any>;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  // const StaticTweet = ({ id }) => {
  //   const tweet = tweets.find((tweet) => tweet.id === id)
  //   return <Tweet {...tweet} />
  // }

  return (
    <article>
      <Component components={{ ...components }} />
    </article>
  )
}

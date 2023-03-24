import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  // Image: RoundedImage,
  // a: CustomLink,
  // Callout,
  // ProsCard,
  // ConsCard,
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
    <article className="prose max-w-none dark:prose-invert">
      <Component components={{ ...components }} />
    </article>
  )
}

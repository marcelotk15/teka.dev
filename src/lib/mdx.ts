import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export async function mdxToHtml(source: string) {
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'mdx',
    },
  })

  const tweetMatches = source.match(/<StaticTweet\sid="[0-9]+"\s\/>/g)
  const tweetIDs = tweetMatches?.map((tweet: string) => tweet.match(/[0-9]+/g)?.[0])

  return {
    html: mdxSource,
    tweetIDs: tweetIDs || [],
    wordCount: source.split(/\s+/gu).length,
    readingTime: readingTime(source),
  }
}

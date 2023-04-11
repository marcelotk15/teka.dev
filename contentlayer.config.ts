import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

function getLocale(path: string) {
  const pathArray = path.split('.')

  return pathArray.length > 2 ? pathArray.slice(-2)[0] : 'en'
}

// /** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    // resolve: (doc) => {
    //   const flattenedPath = doc._raw.flattenedPath

    //   const flattenedPathSliced = flattenedPath.split('/')

    //   return flattenedPathSliced[1] || flattenedPathSliced[0] || flattenedPath
    // },

    resolve: (doc) => doc._raw.sourceFileName.replace(/(\.pt-BR)?\.mdx$/, ''),
  },

  locale: {
    type: 'string',
    resolve: (doc) => {
      return getLocale(doc._raw.sourceFilePath)
    },
  },

  structuredData: {
    type: 'list',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image
        ? `https://teka.dev${doc.image}`
        : `https://teka.dev/api/og?title=${doc.title}`,
      url: `https://teka.dev/blog/${doc._raw.flattenedPath}`,
      author: {
        '@type': 'Person',
        name: 'Marcelo Oliveira',
      },
    }),
  },

  // tweetIds: {
  //   type: 'array',
  //   resolve: (doc) => {
  //     const tweetMatches = doc.body.raw.match(/<StaticTweet\sid="[0-9]+"\s\/>/g)
  //     return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || []
  //   },
  // },
}

export const Blog = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `/blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
    },
  },
  computedFields,
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})

export default contentLayerConfig

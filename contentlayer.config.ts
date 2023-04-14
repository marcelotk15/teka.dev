import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import remarkSectionize from 'remark-sectionize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import readingTime from 'reading-time'
import rehypePrism from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'

import { extractTocHeadings } from './src/lib/mdx'

function getLocale(path: string) {
  const pathArray = path.split('.')

  return pathArray.length > 2 ? pathArray.slice(-2)[0] : 'en'
}

const computedFields: ComputedFields = {
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw),
  },

  wordCount: { type: 'number', resolve: (doc) => doc.body.raw.split(/\s+/gu).length },

  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/(\.pt-BR)?\.mdx$/, ''),
  },

  locale: {
    type: 'string',
    resolve: (doc) => {
      return getLocale(doc._raw.sourceFilePath)
    },
  },

  structuredData: {
    type: 'json',
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

  toc: { type: 'json', resolve: (doc) => extractTocHeadings(doc.body.raw) },
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
    summary: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    updatedAt: { type: 'string' },
    image: { type: 'string' },
    tags: { type: 'json', required: false },
  },
  computedFields,
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm, remarkSectionize],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypePresetMinify,
      [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
    ],
  },
})

export default contentLayerConfig

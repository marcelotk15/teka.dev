import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { ReadTimeResults } from 'reading-time'

export type Post = {
  _id: string
  slug: string
  content: MDXRemoteSerializeResult
  content_ptBR: MDXRemoteSerializeResult
  title: string
  date: string
  excerpt: string
  coverImage: string
  readingTime: ReadTimeResults
  tweets: unknow[]
}

import Link from 'next/link'
import { NextSeo } from 'next-seo'
import FadeIn from 'react-fade-in'
import { GetStaticPropsResult } from 'next'

import { PageMainSectionTitle } from '@/components/PageMainSectionTitle'
import { allBlogPosts, BlogPost } from 'contentlayer/generated'

type BlogPageProps = {
  posts: BlogPost[]
}

function PostCard({ title, slug, publishedAt, summary }: BlogPost) {
  return (
    <article>
      <Link
        href={{
          pathname: '/blog/[slug]',
          query: { slug },
        }}
        title={title}
      >
        <div className="w-full items-stretch rounded-md p-4 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-zinc-300 dark:hover:bg-zinc-700">
          <div className="flex flex-col items-start">
            <h2 className="font-serif text-xl font-bold">{title}</h2>

            <div className="flex gap-2">
              <span>{publishedAt}</span>

              <span>•</span>

              <span>readingtime</span>
            </div>

            <div>{summary}</div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <>
      <NextSeo
        title="Blog"
        description="Read my thoughts on software development, design, and more."
      />

      <FadeIn>
        <section className="container">
          <PageMainSectionTitle title="Blog" />

          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <PostCard key={post._id} {...post} />
            ))}
          </div>
        </section>
      </FadeIn>
    </>
  )
}

export function getStaticProps(): GetStaticPropsResult<BlogPageProps> {
  return {
    props: {
      posts: allBlogPosts.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)),
    },
  }
}

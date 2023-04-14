import Link from 'next/link'
import { NextSeo } from 'next-seo'
import FadeIn from 'react-fade-in'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { readingTime, type SupportedLanguages } from 'reading-time-estimator'
import useTranslation from 'next-translate/useTranslation'

import { PageMainSectionTitle } from '@/components/PageMainSectionTitle'
import { allBlogPosts, BlogPost } from 'contentlayer/generated'
import { formatDate } from '@/lib/utils'

type BlogPageProps = {
  posts: BlogPost[]
}

function PostCard({ title, slug, publishedAt, summary, locale, readingTime }: BlogPost) {
  const { t } = useTranslation()

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
              <span>{formatDate(publishedAt, locale)}</span>

              <span>•</span>

              <span>{t('blog:readingTime', { time: Math.ceil(readingTime.minutes) })}</span>
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

export function getStaticProps({
  locale,
}: GetStaticPropsContext): GetStaticPropsResult<BlogPageProps> {
  return {
    props: {
      posts: allBlogPosts
        .filter((post) => post.locale === locale)
        .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)),
    },
  }
}

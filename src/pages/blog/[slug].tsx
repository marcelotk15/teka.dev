import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import FadeIn from 'react-fade-in/lib/FadeIn'
import useTranslation from 'next-translate/useTranslation'

import { allBlogPosts, BlogPost } from 'contentlayer/generated'
import { Mdx } from '@/components/MDX/'
import { PageMainSectionTitle } from '@/components/PageMainSectionTitle'
import { formatDate } from '@/lib/utils'
import { Toc } from '@/components/Toc'

export default function BlogPostPage(post: BlogPost) {
  const { t } = useTranslation()

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.summary}
        openGraph={{
          images: [
            {
              url: post.image
                ? `https://teka.dev${post.image}`
                : `https://teka.dev/api/og?title=${post.title}`,
            },
          ],
        }}
      />

      <FadeIn>
        <main className="container md:max-w-6xl">
          <div className="justify-between gap-8 md:flex">
            <div className="md:w-4/5">
              <PageMainSectionTitle title={post.title} description={post.summary} />

              <div className="mb-5">
                <time
                  dateTime={post.publishedAt}
                  className="order-first flex items-center text-lg text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">
                    {formatDate(post.publishedAt, post.locale)} •{' '}
                    {t('blog:readingTime', { time: Math.ceil(post.readingTime.minutes) })}
                  </span>
                </time>
              </div>

              <Mdx post={post} />

              {/* TODO: TAGS */}
              {/* <div className="mt-3 border-y-2 border-slate-400 text-lg">
                <p className="flex flex-wrap items-center gap-2 py-4">
                  Tags :{' '}
                  {post.tags?.map((tag: string, idx: number) => (
                    <span
                      className="bg-greenAccent rounded-lg p-0.5 text-lg text-slate-100"
                      key={idx}
                    >
                      {tag.toLocaleString()}
                    </span>
                  ))}
                </p>
              </div> */}
            </div>

            <Toc toc={post.toc} />
          </div>
        </main>
      </FadeIn>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allBlogPosts.map(({ slug, locale }) => ({ params: { slug }, locale })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPost> = ({ params, locale }) => {
  const slug = params?.slug as string

  const post = allBlogPosts.find((post) => post.slug === slug && post.locale === locale)

  if (!post)
    return {
      notFound: true,
    }

  return {
    props: { ...post },
  }
}

import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import FadeIn from 'react-fade-in/lib/FadeIn'

import { allBlogPosts, BlogPost } from 'contentlayer/generated'
import { Mdx } from '@/components/Mdx'
import { PageMainSectionTitle } from '@/components/PageMainSectionTitle'

export default function BlogPostPage({ title, body, summary, publishedAt, image }: BlogPost) {
  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        openGraph={{
          images: [
            {
              url: image ? `https://teka.dev${image}` : `https://teka.dev/api/og?title=${title}`,
            },
          ],
        }}
      />

      <FadeIn>
        <main className="container">
          <PageMainSectionTitle title={title} description={summary} />

          <Mdx code={body.code} />
        </main>
      </FadeIn>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allBlogPosts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPost> = (ctx) => {
  const slug = ctx.params?.slug as string

  const post = allBlogPosts.find((post) => post.slug === slug)

  if (!post)
    return {
      notFound: true,
    }

  return {
    props: { ...post },
  }
}

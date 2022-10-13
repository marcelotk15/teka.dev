import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { Texture } from '.'
import { Footer } from './Organisms/Footer'
import { Header } from './Organisms/Header'

interface LayoutProps {
  date?: string
  title?: string
  image?: string
  description?: string
  type?: string
  children: ReactNode
}

export function Layout({ children, ...customMeta }: LayoutProps) {
  const router = useRouter()

  const meta = {
    title: 'teka | Marcelo Oliveira – Developer, writer, creator.',
    description: `Front-end developer, JavaScript enthusiast.`,
    image: 'https://teka.dev/static/images/banner.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://teka.dev${router.asPath}`} />
        <link rel="canonical" href={`https://teka.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_marcelotk" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />

      <Texture />
    </>
  )
}

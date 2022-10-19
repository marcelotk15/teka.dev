import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { Texture } from '@components/Atoms/Texture'
import { Footer } from '@components/Organisms/Footer'
import { Header } from '@components/Organisms/Header'

interface LayoutProps {
  children: ReactNode
  date?: string
  title?: string
  image?: string
  description?: string
  type?: string
}

export function MainLayout({ children, ...customMeta }: LayoutProps) {
  const { asPath } = useRouter()

  const meta = {
    title: 'teka • Marcelo Oliveira',
    description: `Front-end developer, JavaScript enthusiast.`,
    image: `/static/images/banner.png`,
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://teka.dev${asPath}`} />

        <link rel="canonical" href={`https://teka.dev${asPath}`} />

        {/* Add hreflang links */}
        <link rel="alternate" href="http://teka.dev" hrefLang="x-default" />
        <link rel="alternate" href="http://teka.dev" hrefLang="en" />
        <link rel="alternate" href="http://teka.dev/en" hrefLang="en" />
        <link rel="alternate" href="http://teka.dev/pt-BR" hrefLang="pt-BR" />

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="teka | Marcelo Oliveira" />
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

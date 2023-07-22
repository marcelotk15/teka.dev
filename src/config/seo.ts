import type { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | teka - Marcelo Oliveira',
  defaultTitle: 'teka - Marcelo Oliveira',
  description: 'Developer',
  canonical: 'https://teka.dev',
  openGraph: {
    title: 'teka - Marcelo Oliveira',
    description: 'Developer',
    url: 'https://teka.dev',
    siteName: 'teka - Marcelo Oliveira',
    images: [
      {
        url: 'https://teka.dev/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  robotsProps: {
    maxImagePreview: 'large',
    maxSnippet: -1,
    maxVideoPreview: -1,
  },
}

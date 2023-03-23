import type { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Marcelo "teka" Oliveira',
  defaultTitle: 'Marcelo "teka" Oliveira',
  description: 'Developer',
  canonical: 'https://teka.dev',
  openGraph: {
    title: 'Marcelo "teka" Oliveira',
    description: 'Developer',
    url: 'https://teka.dev',
    siteName: 'Marcelo "teka" Oliveira',
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

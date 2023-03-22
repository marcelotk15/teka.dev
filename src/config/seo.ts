import type { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Marcelo "teka" Oliveira',
  defaultTitle: 'Marcelo "teka" Oliveira',
  description: 'Marcelo "teka" Oliveira.',
  canonical: 'https://teka.dev',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://teka.dev',
    site_name: 'Marcelo "teka" Oliveira',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}

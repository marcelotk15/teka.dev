import { createClient } from 'next-sanity'

import { sanityConfig } from './sanity-config'

export const sanityClient = createClient(sanityConfig)

const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export const getClient = (preview: unknown) => (preview ? previewClient : sanityClient)

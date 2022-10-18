import type { NextApiRequest, NextApiResponse } from 'next'

import { getNowPlaying } from '@lib/spotify'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const response = await getNowPlaying()

  if (!response) {
    return res.status(200).json({ isPlaying: false })
  }

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')
  res.setHeader('content-type', 'application/json')

  return res.status(200).json(response)
}

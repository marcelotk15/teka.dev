import type { NextApiRequest, NextApiResponse } from 'next'

import { getNowPlaying } from '@lib/spotify'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const response = await getNowPlaying()

  if (!response) {
    return res.status(200).json({ isPlaying: false })
  }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  })
}

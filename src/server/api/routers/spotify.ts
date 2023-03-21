import { getNowPlaying } from '@/lib/spotify'

import { createTRPCRouter, publicProcedure } from '../trpc'
import { NowPlayingResponseSchema } from '../schemas/spotify'

export const spotifyRouter = createTRPCRouter({
  nowPlaying: publicProcedure.query(async () => {
    const nowPlayingResponse = await getNowPlaying()

    const safeParse = NowPlayingResponseSchema.safeParse(nowPlayingResponse)

    if (!safeParse.success) return null

    return safeParse.data
  }),
})

import { createTRPCRouter } from '@/server/api/trpc'
import { spotifyRouter } from '@/server/api/routers/spotify'
import { exampleRouter } from '@/server/api/routers/example'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  spotify: spotifyRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter

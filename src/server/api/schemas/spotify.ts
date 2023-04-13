import { z } from 'zod'

export const NowPlayingResponseSchema = z.object({
  timestamp: z.number(),
  context: z.object({
    external_urls: z.object({ spotify: z.string() }),
    href: z.string(),
    type: z.string(),
    uri: z.string(),
  }),
  progress_ms: z.number(),
  item: z.object({
    album: z.object({
      album_group: z.string(),
      album_type: z.string(),
      artists: z.array(
        z.object({
          external_urls: z.object({ spotify: z.string() }),
          href: z.string(),
          id: z.string(),
          name: z.string(),
          type: z.string(),
          uri: z.string(),
        }),
      ),
      available_markets: z.array(z.string()),
      external_urls: z.object({ spotify: z.string() }),
      href: z.string(),
      id: z.string(),
      images: z.array(z.object({ height: z.number(), url: z.string(), width: z.number() })),
      name: z.string(),
      release_date: z.string(),
      release_date_precision: z.string(),
      total_tracks: z.number(),
      type: z.string(),
      uri: z.string(),
    }),
    artists: z.array(
      z.object({
        external_urls: z.object({ spotify: z.string() }),
        href: z.string(),
        id: z.string(),
        name: z.string(),
        type: z.string(),
        uri: z.string(),
      }),
    ),
    available_markets: z.array(z.string()),
    disc_number: z.number(),
    duration_ms: z.number(),
    explicit: z.boolean(),
    external_ids: z.object({ isrc: z.string() }),
    external_urls: z.object({ spotify: z.string() }),
    href: z.string(),
    id: z.string(),
    is_local: z.boolean(),
    name: z.string(),
    popularity: z.number(),
    preview_url: z.string(),
    track_number: z.number(),
    type: z.string(),
    uri: z.string(),
  }),
  currently_playing_type: z.string(),
  actions: z.object({
    disallows: z
      .object({
        resuming: z.boolean().optional(),
        skipping_prev: z.boolean().optional(),
      })
      .optional(),
  }),
  is_playing: z.boolean(),
})

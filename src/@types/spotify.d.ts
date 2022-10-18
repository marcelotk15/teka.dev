interface Item {
  album: Album
  artists: Artist[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIds
  external_urls: ExternalUrls
  href: string
  id: string
  is_local: boolean
  is_playable: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

interface Album {
  album_type: string
  artists: Artist[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

interface ExternalUrls {
  spotify: string
}

interface Image {
  height: number
  url: string
  width: number
}

interface ExternalIds {
  isrc: string
}

export interface PlayingNowActions {
  disallows: Disallows
}

interface Disallows {
  resuming: boolean
  toggling_repeat_context: boolean
  toggling_repeat_track: boolean
  toggling_shuffle: boolean
}

export interface PlayingNow {
  timestamp: number
  context: any
  progress_ms: number
  item: Item
  currently_playing_type: string
  actions: Actions
  is_playing: boolean
}

export interface TopTracks {
  items: Item[]
  total: number
  limit: number
  offset: number
  href: string
  previous: any
  next: string
}

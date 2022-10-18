import useSWR from 'swr'

import { Track } from '@components/Molecules/Track'
import fetcher from '@lib/fetcher'
import type { TopTracks } from '@local-types/track'

export function TopTracks() {
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher)

  if (!data?.tracks) {
    return null
  }

  return (
    <>
      {data.tracks.map((song, index) => (
        <Track key={song.songUrl} ranking={index + 1} {...song} />
      ))}
    </>
  )
}

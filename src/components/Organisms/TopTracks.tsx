import useSWR from 'swr'

import { Track } from '@components/Molecules/Track'
import fetcher from '@lib/fetcher'
import { Item } from '@local-types/spotify'

export function TopTracks() {
  const { data } = useSWR<{ tracks: Item[] }>('/api/top-tracks', fetcher)

  if (!data?.tracks) {
    return null
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track key={track.id} ranking={index + 1} track={track} />
      ))}
    </>
  )
}

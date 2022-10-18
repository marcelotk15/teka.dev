import useSWR from 'swr'

import { TopTracks } from '@/src/@types/track'
import fetcher from '@/src/lib/fetcher'

import { Track } from '../Molecules/Track'

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

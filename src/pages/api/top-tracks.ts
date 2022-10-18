import { getTopTracks } from '@lib/spotify'

export default async function handler() {
  const response = await getTopTracks()

  // const tracks = items.slice(0, 10).map((track: any) => ({
  //   artist: track.artists.map((_artist: any) => _artist.name).join(', '),
  //   songUrl: track.external_urls.spotify,
  //   title: track.name,
  // }))

  return new Response(JSON.stringify({ tracks: response.items }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  })
}

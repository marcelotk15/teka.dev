import Cookies from 'js-cookie'

import { env } from '@/env.mjs'

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = env

const BASIC = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')
const BASE_URL = 'https://api.spotify.com'
console.log('🚀 ~ file: index.ts:9 ~ BASIC:', BASIC)
const NOW_PLAYING_ENDPOINT = `${BASE_URL}/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `${BASE_URL}/v1/me/top/tracks`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${BASIC}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN as string,
    }),
  })

  const { access_token, expires_in } = await response.json()

  Cookies.set('spotify-token', access_token as string, { expires: expires_in as number })

  return access_token as string
}

export async function getNowPlaying() {
  const access_token = Cookies.get('spotify-token') || (await getAccessToken())

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (response.status === 204 || response.status > 400) {
    return false
  }

  return await response.json()
}

export async function getTopTracks() {
  const access_token = Cookies.get('spotify-token') || (await getAccessToken())

  const response = await fetch(`${TOP_TRACKS_ENDPOINT}?limit=10`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  return await response.json()
}

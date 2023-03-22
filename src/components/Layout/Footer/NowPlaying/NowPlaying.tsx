import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { Fragment } from 'react'

import { api } from '@/utils/api'
import { Icons } from '@/components/Icons'
import { NowPlayingSkeleton } from '@/components/Skeletons'

import { AnimatedBars } from './AnimatedBars'

export function NowPlaying() {
  const { t } = useTranslation()

  const { data, isLoading } = api.spotify.nowPlaying.useQuery()

  const musicAndArtist = `${data?.item.name} - ${data?.item.artists
    ?.map((artist) => artist.name)
    .join(', ')}`

  const SpotifyWrapper = data?.item ? Link : Fragment

  return (
    <NowPlayingSkeleton isLoading={isLoading}>
      <SpotifyWrapper
        href={data?.item.external_urls.spotify || ''}
        aria-label={musicAndArtist}
        target="_blank"
        className="block w-full md:w-auto"
      >
        <div className="relative my-4 inline-flex w-full items-center gap-2 rounded-lg border border-zinc-400 bg-zinc-200 p-4 dark:border-zinc-700 dark:bg-zinc-800">
          <div className="text-green-600">{Icons.spotify}</div>

          {data?.item ? (
            <>
              <div className="absolute inset-0 top-1/2 left-1/2 -z-10 h-[calc(100%+.5rem)] w-[calc(100%+.5rem)] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ce4de9] via-[#ff6c6a] to-[#f4aa4b] opacity-50 blur-md dark:opacity-30" />

              <div className="flex w-full flex-1 flex-col">
                <div className="flex items-baseline gap-3 font-serif text-zinc-400">
                  <span>{t('common:spotify.listeningNow')}</span>

                  <AnimatedBars />
                </div>

                <span>
                  <strong className="font-semibold">
                    {data?.item?.artists?.map((artist) => artist.name).join(', ')}
                  </strong>
                  {' - '} {data.item.name}
                </span>
              </div>
            </>
          ) : (
            <div>{t('common:spotify.listeningNothing')}</div>
          )}
        </div>
      </SpotifyWrapper>
    </NowPlayingSkeleton>
  )
}

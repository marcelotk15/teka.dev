import useSWR from 'swr'
import { SpotifyLogo } from 'phosphor-react'

import { styled, keyframes } from '@theme'

import fetcher from '../../lib/fetcher'
import { NowPlayingSong } from '../../lib/types'
import { P } from '..'

function AnimatedBars() {
  const BarAnimation1 = keyframes({
    '0%': { transform: 'scaleY(1.0) translateY(0rem)' },
    '50%': { transform: 'scaleY(1.5) translateY(-0.082rem)' },
    '100%': { transform: 'scaleY(1.0) translateY(0rem)' },
  })

  const BarAnimation2 = keyframes({
    '0%': { transform: 'scaleY(1.0) translateY(0rem)' },
    '50%': { transform: 'scaleY(3) translateY(-0.083rem)' },
    '100%': { transform: 'scaleY(1.0) translateY(0rem)' },
  })

  const BarAnimation3 = keyframes({
    '0%': { transform: 'scaleY(1.0)  translateY(0rem)' },
    '50%': { transform: 'scaleY(0.5) translateY(0.37rem)' },
    '100%': { transform: 'scaleY(1.0)  translateY(0rem)' },
  })

  const AnimatedBarsStyled = styled('div', {
    width: 'auto',
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'hidden',
    gap: '3px',
  })

  const AnimatedBar = styled('span', {
    width: '$1',
    backgroundColor: '$slate11',
    willChange: 'transform',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  })

  return (
    <AnimatedBarsStyled>
      <AnimatedBar
        css={{
          height: '$2',
          opacity: 0.75,
          animationDuration: '1s',
          animationName: BarAnimation1.name,
        }}
      />

      <AnimatedBar
        css={{
          height: '$1',
          animationDelay: '.2s',
          animationDuration: '1.5s',
          animationName: BarAnimation2.name,
        }}
      />

      <AnimatedBar
        css={{
          height: '$3',
          opacity: 0.8,
          animationDelay: '.3s',
          animationDuration: '1.5s',
          animationName: BarAnimation3.name,
        }}
      />
    </AnimatedBarsStyled>
  )
}

export function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)

  const NowPlayingInfo = styled('div', {
    display: 'inline-flex',
    flexDirection: 'column',
    width: '$full',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    '@desktop': {
      flexDirection: 'row',
    },
  })

  const NowPlayingLink = styled('a', {
    color: '$slate12',
    textDecoration: 'underline',
    textDecorationColor: '$slate7',
    textUnderlineOffset: '.25rem',
    borderRadius: '$1',

    '&:hover': {
      backgroundColor: '$slate7',
      textDecoration: 'none',
    },
  })

  const Wrapper = styled('section', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    mb: '$8',
    width: '$full',
    position: 'relative',

    '@desktop': {
      flexDirection: 'row',
      gap: '$2',
    },

    '&::before': {
      content: '',
      position: 'absolute',
      top: 0,
      bottom: 0,
      aspectRatio: '1/1',
      background: '$green11',
      zIndex: '$hide',
      filter: 'blur(1rem)',
      opacity: 0.8,
    },
  })

  return (
    <Wrapper>
      <SpotifyLogo weight="fill" color="#1ED760" size={24} />

      <NowPlayingInfo className="inline-flex flex-col sm:flex-row w-full max-w-full truncate">
        {data?.songUrl ? (
          <>
            <AnimatedBars />

            <NowPlayingLink
              className="capsize text-gray-800 dark:text-gray-200 font-medium  max-w-max truncate"
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.title}
            </NowPlayingLink>
          </>
        ) : (
          <P margin={'none'}>Not Playing</P>
        )}

        <P
          css={{ color: '$slate11', mx: '$2', display: 'none', '@desktop': { display: 'block' } }}
          as="span"
          margin={'none'}
        >
          {' – '}
        </P>

        <P css={{ color: '$slate11' }} margin={'none'}>
          {data?.artist ?? 'Spotify'}
        </P>
      </NowPlayingInfo>
    </Wrapper>
  )
}

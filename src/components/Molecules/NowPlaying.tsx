import useSWR from 'swr'
import { SpotifyLogo } from 'phosphor-react'

import { styled, keyframes } from '@theme'

import fetcher from '../../lib/fetcher'
import { NowPlayingSong } from '../../lib/types'
import { Box } from '../Atoms/Box'
import { Text } from '../Atoms/Text'

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

const Wrapper = styled(Box, {
  gap: '$5',
  mb: '$8',
  position: 'relative',
  justifyContent: 'center',

  '@desktop': {
    justifyContent: 'flex-start',
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

const NowPlayingLink = styled('a', {
  position: 'relative',
  fontWeight: '$bold',
  color: '$slate11',

  '&::before': {
    content: '',
    position: 'absolute',
    width: '105%',
    bottom: 0,
    height: '1px',
    backgroundColor: '$green9',
    transition: 'height .2s',
    borderRadius: '$1',
    zIndex: '$hide',
    padding: '$px',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: '.8',
  },

  '&:hover': {
    color: '$hiContrast',

    '&::before': {
      height: '100%',
      padding: '$2',
    },
  },
})

export function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)

  return (
    <Wrapper items="center">
      <SpotifyLogo weight="fill" color="#1ED760" size={24} />

      <Box items="center" gap={3}>
        {data?.songUrl ? (
          <>
            <AnimatedBars />

            <NowPlayingLink
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${data.title} - ${data.artist}`}
            >
              <Text color={'inherit'}>{data.title} </Text>
              <Text color={'inherit'}>- {data.artist}</Text>
            </NowPlayingLink>
          </>
        ) : (
          <Text>Listening nothing</Text>
        )}
      </Box>
    </Wrapper>
  )
}

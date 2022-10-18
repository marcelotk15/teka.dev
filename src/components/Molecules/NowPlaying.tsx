import useSWR from 'swr'
import { SpotifyLogo } from 'phosphor-react'

import { styled, keyframes, theme } from '@theme'
import { Box } from '@components/Atoms/Box'
import { Link } from '@components/Atoms/Link'
import { NowPlayingSong } from '@lib/types'
import fetcher from '@lib/fetcher'
import { Text } from '@components/Atoms/Text'

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
  mb: '$8',
  position: 'relative',

  justifyContent: 'center',

  '@lg': {
    justifyContent: 'flex-start',
  },
})

const NowPlayingLink = styled(Link, {
  '::before': {
    backgroundColor: '$green9',
  },

  ':hover': {
    color: '$hiContrast',
  },
})

export function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)

  return (
    <Wrapper items="center" gap={5}>
      <SpotifyLogo weight="fill" color={theme.colors.green10.value} size={24} />

      <Box items="center" gap={3}>
        {data?.songUrl ? (
          <>
            <AnimatedBars />

            <NowPlayingLink href={data.songUrl} title={`${data.title} - ${data.artist}`}>
              <Text color={'inherit'} weight="semibold">
                {`${data.title} `}
              </Text>
              <Text color={'inherit'}>
                {' - '} {data.artist}
              </Text>
            </NowPlayingLink>
          </>
        ) : (
          <Text>Listening nothing</Text>
        )}
      </Box>
    </Wrapper>
  )
}

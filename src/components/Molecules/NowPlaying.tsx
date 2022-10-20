import useSWR from 'swr'
import { SpotifyLogo } from 'phosphor-react'
import useTranslation from 'next-translate/useTranslation'

import { styled, keyframes, theme } from '@theme'
import { Box } from '@components/Atoms/Box'
import { Link } from '@components/Atoms/Link'
import fetcher from '@lib/fetcher'
import { Text } from '@components/Atoms/Text'
import { PlayingNow } from '@local-types/spotify'

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

  const AnimatedBarsStyled = styled(Box, {
    width: 'min-content',
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
    <AnimatedBarsStyled items="flexEnd">
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
  border: '1px solid $slate5',
  padding: '$4',
  background: '$slate4',
  borderRadius: '$3',
  zIndex: '$5',

  '@lg': {
    display: 'inline-flex',
  },
})

const NowPlayingLink = styled(Link, {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: '$slate11',

  '&::before': {
    backgroundColor: '$green9',
  },

  '&:hover': {
    color: '$slate12',
  },
})

export function NowPlaying() {
  const { t } = useTranslation()

  const { data } = useSWR<PlayingNow>('/api/now-playing', fetcher)

  const musicAndArtist = `${data?.item?.name} - ${data?.item?.artists
    ?.map((artist) => artist.name)
    .join(', ')}`

  return (
    <Wrapper items="center" gap={3}>
      <SpotifyLogo weight="fill" color={theme.colors.green10.value} size={24} />

      {data?.item ? (
        <>
          <AnimatedBars />

          <NowPlayingLink href={data.item.external_urls.spotify} title={musicAndArtist}>
            <Text color={'inherit'} weight="semibold">
              {`${data.item.name} `}
            </Text>
            <Text color={'inherit'}>
              {' - '} {musicAndArtist}
            </Text>
          </NowPlayingLink>
        </>
      ) : (
        <Text>{t('common:spotify.listeningNothing')}</Text>
      )}
    </Wrapper>
  )
}

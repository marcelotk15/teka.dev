import Image from 'next/future/image'

import { Box } from '@components/Atoms/Box'
import { Link as LinkComponent } from '@components/Atoms/Link'
import { Text } from '@components/Atoms/Text'
import { styled } from '@theme'
import { Item } from '@local-types/spotify'
import { convertMsToMinutesSeconds } from '@lib/helpes'

interface TrackProps {
  track: Item
  ranking: number
}

const Wrapper = styled(Box, {
  pb: '$4',
  borderBottom: '1px solid $slate7',
})

const Link = styled(LinkComponent, {
  fontWeight: '$semibold',
  color: '$slate12',

  '&:hover': {
    color: '$slate11',
  },
})

const Cover = styled(Image, {
  borderRadius: '$2',
  width: '64px',
  height: '64px',
})

export function Track({ track, ranking }: TrackProps) {
  const { length, [length - 1]: image } = track.album.images
  const musicAndArtist = track.artists.map((artist) => artist.name).join(', ')

  return (
    <Wrapper gap={3} items="flexStart">
      <Text color="gray" size="sm">
        {ranking}
      </Text>

      <Box gap={3}>
        <Cover src={image.url} width={image.width} height={image.height} alt={musicAndArtist} />

        <Box column>
          <Link href={track.external_urls.spotify} withoutUnderline title={musicAndArtist}>
            {track.name}
          </Link>

          <Text color="gray">{musicAndArtist}</Text>

          <Text color="gray" size="sm">
            {convertMsToMinutesSeconds(track.duration_ms)}
          </Text>
        </Box>
      </Box>
    </Wrapper>
  )
}

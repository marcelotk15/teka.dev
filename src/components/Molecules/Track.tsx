import { Box } from '@components/Atoms/Box'
import { Link as LinkComponent } from '@components/Atoms/Link'
import { Text } from '@components/Atoms/Text'
import { styled } from '@theme'
import { Item } from '@local-types/spotify'

interface TrackProps {
  track: Item
  ranking: number
}

const Wrapper = styled(Box, {
  mt: '$4',
  pb: '$3',
  borderBottom: '1px solid $slate11',
})

const Link = styled(LinkComponent, {
  fontWeight: '$semibold',
  color: '$slate12',

  '&:hover': {
    color: '$slate11',
  },
})

export function Track({ track, ranking }: TrackProps) {
  console.log('🚀 ~ file: Track.tsx ~ line 28 ~ Track ~ track', track)
  return (
    <Wrapper gap={3} items="baseline">
      <Text color="gray" size="sm">
        {ranking}
      </Text>

      <Box column gap={1}>
        <Link href={track.external_urls.spotify} withoutUnderline>
          {track.name}
        </Link>

        <Text color="gray" size="sm">
          {track.artists.map((_artist: any) => _artist.name).join(', ')}
        </Text>
      </Box>
    </Wrapper>
  )
}

import { Box } from '@components/Atoms/Box'
import { Link as LinkComponent } from '@components/Atoms/Link'
import { Text } from '@components/Atoms/Text'
import { styled } from '@theme'
import { Song } from '@local-types/track'

interface TrackProps extends Song {
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

export function Track({ ranking, songUrl, title, artist }: TrackProps) {
  return (
    <Wrapper gap={3} items="baseline">
      <Text color="gray" size="sm">
        {ranking}
      </Text>

      <Box column gap={1}>
        <Link href={songUrl} target="_blank" rel="noopener noreferrer" withoutUnderline>
          {title}
        </Link>

        <Text color="gray" size="sm">
          {artist}
        </Text>
      </Box>
    </Wrapper>
  )
}

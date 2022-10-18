import { Song } from '@/src/@types/track'
import { styled } from '@/stitches.config'

import { Box } from '../Atoms/Box'
import { Link as LinkComponent } from '../Atoms/Link'
import { Text } from '../Atoms/Text'

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

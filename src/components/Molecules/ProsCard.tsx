import { CheckCircle } from 'phosphor-react'

import { styled, theme } from '@/stitches.config'

import { Box } from '../Atoms/Box'
import { Text } from '../Atoms/Text'

interface ConsCardProps {
  title: string
  pros: string[]
}

const Wrapper = styled(Box, {
  backgroundColor: '$green7',
  borderRadius: '$4',
  border: '1px solid $green6',
  padding: '$6',
  my: '$4',
})

export function ProsCard({ title, pros }: ConsCardProps) {
  return (
    <Wrapper column gap={4}>
      <Text>
        You might not use <Text weight={'semibold'}>{title}</Text> if...
      </Text>

      <Box column gap={2}>
        {pros.map((pro, index) => (
          <Box key={index} gap={2} items="center">
            <CheckCircle size={20} color={theme.colors.green11.value} />

            <Text>{pro}</Text>
          </Box>
        ))}
      </Box>
    </Wrapper>
  )
}

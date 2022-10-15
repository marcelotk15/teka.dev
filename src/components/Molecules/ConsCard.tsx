import { CheckCircle } from 'phosphor-react'

import { styled, theme } from '@/stitches.config'

import { Box } from '../Atoms/Box'
import { Text } from '../Atoms/Text'

interface ConsCardProps {
  title: string
  cons: string[]
}

const Wrapper = styled(Box, {
  backgroundColor: '$red7',
  borderRadius: '$4',
  border: '1px solid $red6',
  padding: '$6',
  my: '$4',
})

export function ConsCard({ title, cons }: ConsCardProps) {
  return (
    <Wrapper column gap={4}>
      <Text>
        You might use <Text weight={'semibold'}>{title}</Text> if...
      </Text>

      <Box column gap={2}>
        {cons.map((con, index) => (
          <Box key={index} gap={2} items="center">
            <CheckCircle size={20} color={theme.colors.red11.value} />

            <Text>{con}</Text>
          </Box>
        ))}
      </Box>
    </Wrapper>
  )
}

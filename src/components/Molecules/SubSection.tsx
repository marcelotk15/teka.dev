import { ReactNode } from 'react'

import { Box } from '@components/Atoms/Box'
import { Heading } from '@components/Atoms/Heading'

interface SectionProps {
  title: string
  children: ReactNode
}

export function SubSection({ children, title }: SectionProps) {
  return (
    <Box gap={4} column css={{ mt: '$4' }}>
      <Heading>{title}</Heading>

      {children}
    </Box>
  )
}

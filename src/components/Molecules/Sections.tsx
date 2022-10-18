import { ReactNode } from 'react'

import { Box } from '@components/Atoms/Box'
import { Heading } from '@components/Atoms/Heading'

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ children, title }: SectionProps) {
  return (
    <Box column gap={6} css={{ mt: '$6' }}>
      <Heading size="lg">{title}</Heading>

      {children}
    </Box>
  )
}

import { ReactNode } from 'react'

import { Heading } from '../Atoms/Heading'
import { Box } from '../Atoms/Box'

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

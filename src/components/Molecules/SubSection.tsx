import { ReactNode } from 'react'

import { Heading } from '../Atoms/Heading'
import { Box } from '../Atoms/Box'

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

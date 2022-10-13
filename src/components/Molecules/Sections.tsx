import { ReactNode } from 'react'

import { styled } from '@theme'

import { Heading } from '../Atoms/Heading'

const Wrapper = styled('section', {
  mt: '$6',
  display: 'flex',
  fd: 'column',
  gap: '$6',
})

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ children, title }: SectionProps) {
  return (
    <Wrapper>
      <Heading size="lg">{title}</Heading>

      {children}
    </Wrapper>
  )
}

import GithubSlugger from 'github-slugger'
import { MouseEvent, useCallback } from 'react'

import { styled } from '@/stitches.config'

import { Box } from '../Atoms/Box'
import { Heading } from '../Atoms/Heading'
import { Text } from '../Atoms/Text'

const Wrapper = styled(Box, {
  padding: '$4',
  background: '$slate4',
  borderRadius: '$2',
})

interface PostTableOfContentsProps {
  source: string
}

export function PostTableOfContents({ source }: PostTableOfContentsProps) {
  const headingLines = source.split('\n').filter((line) => line.match(/^###*\s/))

  const headings = headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, '')
    const level = raw.slice(0, 3) === '###' ? 3 : 2
    const slugger = new GithubSlugger()

    return {
      text,
      level,
      href: slugger.slug(text),
    }
  })

  const handleGoToContent = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
  }, [])

  return (
    <Wrapper column>
      <Heading font="sans" size="sm">
        Table of contents
      </Heading>

      <Box column gap={2} css={{ mt: '$3' }}>
        {headings.map(({ text, href }) => (
          <Text key={href} data-href={href} onClick={handleGoToContent}>
            {text}
          </Text>
        ))}
      </Box>
    </Wrapper>
  )
}

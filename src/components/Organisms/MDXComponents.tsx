import NextImage from 'next/future/image'
import { AnchorSimple } from 'phosphor-react'
import { ReactNode } from 'react'

import { styled } from '@theme'
import { Link, LinkProps } from '@components/Atoms/Link'
import { ConsCard } from '@components/Molecules/ConsCard'
import { ProsCard } from '@components/Molecules/ProsCard'
import { Box } from '@components/Atoms/Box'

const Image = styled(NextImage, {
  borderRadius: '$3',
})

function a({ children, ...props }: LinkProps) {
  if (props?.className === 'anchor')
    return (
      <Link {...props} withoutUnderline style={{ display: 'inline-block', marginRight: '.25rem' }}>
        <AnchorSimple weight="duotone" />
      </Link>
    )

  return (
    <Link {...props} showExternalIcon>
      {children}
    </Link>
  )
}

interface BlockquoteProps {
  children: ReactNode
}

function blockquote({ children }: BlockquoteProps) {
  const Blockquote = styled(Box, {
    marginLeft: 0,
    paddingLeft: '1em',
    borderLeft: '5px solid $slate6',
  })

  return (
    <Blockquote block as="blockquote">
      {children}
    </Blockquote>
  )
}

const hr = styled('hr', {
  backgroundColor: '$slate7',
  border: 0,
  height: '$1',
  margin: '$4 0',
})

export const MDXComponents = {
  image: Image,
  a,
  blockquote,
  hr,
  ProsCard,
  ConsCard,
}

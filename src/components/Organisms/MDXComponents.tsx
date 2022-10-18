import NextImage from 'next/future/image'
import { AnchorSimple } from 'phosphor-react'

import { styled } from '@theme'
import { Link, LinkProps } from '@components/Atoms/Link'
import { ConsCard } from '@components/Molecules/ConsCard'
import { ProsCard } from '@components/Molecules/ProsCard'

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

export const MDXComponents = {
  image: Image,
  a,
  ProsCard,
  ConsCard,
}

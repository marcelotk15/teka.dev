import NextImage from 'next/future/image'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import LinkComponent, { LinkProps } from 'next/link'

import { styled } from '@/stitches.config'

import { Link } from '../Atoms/Link'
import { ConsCard } from '../Molecules/ConsCard'
import { ProsCard } from '../Molecules/ProsCard'

const Image = styled(NextImage, {
  borderRadius: '$3',
})

const AStyled = styled(Link, {
  backgroundColor: 'red',

  '&.anchor': {
    padding: 0,

    '&::before': {
      display: 'none',
    },
  },
})

interface AProps extends Omit<typeof AStyled, 'as'> {
  children: ReactNode
}

function a({ children, ...props }: AProps) {
  return (
    <AStyled {...props} showExternalIcon>
      {children}
    </AStyled>
  )
}

export const MDXComponents = {
  Image,
  a,
  ProsCard,
  ConsCard,
}

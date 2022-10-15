import { AnchorHTMLAttributes, ReactNode, useCallback, useEffect, useState } from 'react'
import NextLink from 'next/link'
import { styled } from '@stitches/react'
import { ArrowSquareOut } from 'phosphor-react'

import { Box } from './Box'

export const HyperLink = styled('a', {
  color: '$slate9',
  position: 'relative',
  padding: '0 $1',

  '&::before': {
    content: '',
    position: 'absolute',
    width: '$full',
    bottom: 0,
    height: '1px',
    backgroundColor: '$slate12',
    transition: 'height .2s',
    borderRadius: '$1',
    zIndex: '$hide',
    padding: '$px',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: '.8',
  },

  '&:hover': {
    color: '$slate7',

    '&::before': {
      height: '100%',
    },
  },
})

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  showExternalIcon?: boolean
}

export function Link({ showExternalIcon = false, children, href, ...linkProps }: LinkProps) {
  const [loaded, setIsloaded] = useState(false)

  useEffect(() => {
    setIsloaded(true)
  }, [])

  const isInternal = useCallback((href: string) => {
    const base = new URL(`${window.location.protocol}//${window.location.host}`)

    return new URL(href, base).hostname === base.hostname
  }, [])

  if (!loaded || !href) return null

  if (isInternal(href))
    return (
      <NextLink href={href} passHref>
        <HyperLink>{children}</HyperLink>
      </NextLink>
    )

  return (
    <HyperLink href={href} rel="noopener noreferrer" {...linkProps}>
      <Box css={{ display: 'inline-flex' }} items="center" gap={1}>
        {children}

        {showExternalIcon && <ArrowSquareOut size={12} />}
      </Box>
    </HyperLink>
  )
}

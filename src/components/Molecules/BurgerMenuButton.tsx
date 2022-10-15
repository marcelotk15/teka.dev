import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useMobileMenuActions, useMobileMenuState } from '@/src/hooks/mobileMenu'
import { styled } from '@theme'

import { Box } from '../Atoms/Box'

export const BurgerButton = styled(Box, {
  position: 'relative',
  size: '$5',
  cursor: 'pointer',
  transition: 'all .5s ease-in-out',
  zIndex: '$overlay',

  '@desktop': {
    display: 'none',
  },
})

const BurgerIcon = styled('div', {
  width: '$full',
  height: '.15rem',
  backgroundColor: '$hiContrast',
  borderRadius: '$pill',
  transition: 'all .5s ease-in-out',

  '&::before, &::after': {
    content: '',
    position: 'absolute',
    width: '$5',
    height: '.15rem',
    backgroundColor: '$hiContrast',
    borderRadius: '$pill',
    transition: 'all .5s ease-in-out',
  },

  '&::before': {
    top: '$0',
  },

  '&::after': {
    bottom: '$0',
  },

  variants: {
    opened: {
      true: {
        transform: 'translateX(-50px)',
        background: 'transparent',

        '&::before': {
          transform: 'rotate(45deg) translate(35px, -35px)',
        },
        '&::after': {
          transform: 'rotate(-45deg) translate(35px, 35px)',
        },
      },
    },
  },
})

export function BurgerMenuButton() {
  const { events } = useRouter()

  const { toggleMenu, closeMenu } = useMobileMenuActions() || {}

  const { open } = useMobileMenuState()

  const handleToggleMenu = () => toggleMenu?.()

  useEffect(() => {
    events.on('routeChangeComplete', () => closeMenu?.())
  }, [events, closeMenu])

  return (
    <BurgerButton justify="center" items="center" onClick={handleToggleMenu}>
      <BurgerIcon opened={open} />
    </BurgerButton>
  )
}

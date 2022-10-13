import { useMobileMenuActions, useMobileMenuState } from '../hooks/mobileMenu'
import { styled } from '@theme'

export const BurgerButton = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  size: '$5',
  cursor: 'pointer',
  transition: 'all .5s ease-in-out',
  zIndex: '$overlay',

  '@desktop': {
    display: 'none',
  },

  div: {
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
  },

  variants: {
    close: {
      true: {
        div: {
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
  },
})

export default function BurgerMenu() {
  const mobileMenuActions = useMobileMenuActions()
  const { toggleMenu } = mobileMenuActions || {}

  const { open: mboileMenu } = useMobileMenuState()

  const handleClick = () => toggleMenu?.()

  return (
    <BurgerButton onClick={handleClick} close={mboileMenu}>
      <div />
    </BurgerButton>
  )
}

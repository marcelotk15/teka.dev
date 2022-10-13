import { FunctionComponent } from 'react'

import { styled } from '@theme'

interface ContainerProps {
  layout?: 'center-horizontal' | 'center-vertical'
  size?: 'full' | 'adaptive' | undefined
  css?: any
  children: React.ReactNode
}

const ContainerStyled = styled('div', {
  width: '60rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  mx: 'auto',
  px: '$4',
  maxWidth: 'calc(100% - 1rem * 2)',

  '@table': {
    px: '$6',
  },

  '@desktop': {
    px: '$10',
    maxWidth: 'calc(100% - 2 rem * 2)',
  },

  variants: {
    layout: {
      'center-horizontal': {
        justifyContent: 'center',
        textAlign: 'center',
      },

      'center-vertical': {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },

    size: {
      full: {
        width: '100%',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: 'calc(100% - 1rem * 2)',
      },

      adaptive: {
        maxWidth: '100%',

        '@tablet': {
          maxWidth: 'calc(100% - 1rem * 2)',
        },

        '@desktop': {
          maxWidth: 'calc(100% - 2rem * 2)',
        },
      },
    },
  },
})

export function Container({ layout, css, children, size }: ContainerProps) {
  return (
    <ContainerStyled className="container" {...{ layout }} {...{ size }} css={css}>
      {children}
    </ContainerStyled>
  )
}

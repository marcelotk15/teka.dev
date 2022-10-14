import { HTMLAttributes, ReactNode } from 'react'
import { CSS } from '@stitches/react/types/css-util'

import { styled } from '@/stitches.config'

const BoxStyled = styled('div', {
  display: 'flex',

  variants: {
    block: {
      true: { display: 'block' },
    },

    column: {
      true: { flexDirection: 'column' },
    },

    justify: {
      end: { justifyContent: 'flex-end' },
      center: { justifyContent: 'center' },
      spaceBetween: { justifyContent: 'space-between' },
      spaceAround: { justifyContent: 'space-around' },
      initial: { justifyContent: 'initial' },
      inherit: { justifyContent: 'inherit' },
    },

    wrap: {
      true: { flexWrap: 'wrap' },
      wrapReverse: { flexWrap: 'wrap-reverse' },
    },

    items: {
      center: { alignItems: 'center' },
      flexStart: { alignItems: 'flex-start' },
      flexEnd: { alignItems: 'flex-end' },
      baseline: { alignItems: 'baseline' },
      initial: { alignItems: 'initial' },
      inherit: { alignItems: 'inherit' },
    },

    gap: {
      '1': { gap: '$1' },
      '2': { gap: '$2' },
      '3': { gap: '$3' },
      '4': { gap: '$4' },
      '5': { gap: '$5' },
      '6': { gap: '$6' },
      '7': { gap: '$7' },
      '8': { gap: '$8' },
    },

    full: {
      true: {
        width: '100%',
        flex: 1,
      },
    },
  },
})

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  block?: boolean
  column?: boolean
  justify?: 'end' | 'center' | 'spaceBetween' | 'spaceAround' | 'initial' | 'inherit'
  wrap?: true | 'wrapReverse'
  items?: 'center' | 'flexStart' | 'flexEnd' | 'baseline' | 'initial' | 'inherit'
  css?: CSS
  as?: string
  gap?: number
}

export function Box({ children, ...boxProps }: BoxProps) {
  return <BoxStyled {...boxProps}>{children}</BoxStyled>
}

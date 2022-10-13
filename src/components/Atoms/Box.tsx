import { HTMLAttributes, ReactNode } from 'react'
import { CSS } from '@stitches/react/types/css-util'

import { styled } from '@/stitches.config'

const BoxStyled = styled('div', {
  display: 'block',

  variants: {
    flex: {
      true: { display: 'flex' },
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
  },
})

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  flex?: boolean
  column?: boolean
  justify?: 'end' | 'center' | 'spaceBetween' | 'spaceAround' | 'initial' | 'inherit'
  wrap?: true | 'wrapReverse'
  items?: 'center' | 'flexStart' | 'flexEnd' | 'baseline' | 'initial' | 'inherit'
  css?: CSS
  as?: string
}

export function Box({ children, ...boxProps }: BoxProps) {
  return <BoxStyled {...boxProps}>{children}</BoxStyled>
}

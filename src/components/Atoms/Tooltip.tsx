import { ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { keyframes, styled } from '@theme'

import { Text } from './Text'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const TooltipContent = styled(TooltipPrimitive.Content, {
  padding: '$2 $3',
  backgroundColor: '$slate8',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '300ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },

  variants: {
    radius: {
      center: {
        borderRadius: '$2',
      },
      start: {
        borderRadius: '0 $2 $2 $0',
      },
    },
  },

  defaultVariants: {
    radius: 'center',
  },
})

interface TooltipProps {
  content: ReactNode
  children: ReactNode
  side?: 'top' | 'bottom'
  align?: 'center' | 'start'
  avoidCollisions?: boolean
  delayDuration?: number
}

function TooltipRoot({
  side = 'bottom',
  align = 'center',
  delayDuration = 0,
  content,
  avoidCollisions,
  children,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root delayDuration={delayDuration}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

      <TooltipContent
        avoidCollisions={avoidCollisions}
        side={side}
        align={align}
        sideOffset={12}
        radius={align}
      >
        <Text weight="semibold">{content}</Text>
      </TooltipContent>
    </TooltipPrimitive.Root>
  )
}

export const Tooltip = {
  Provider: TooltipPrimitive.Provider,
  Root: TooltipRoot,
}

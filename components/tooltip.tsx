import { FunctionComponent, ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { styled, keyframes } from '@theme'

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

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$backgroundInvert',
})

export const TooltipContent = styled(TooltipPrimitive.Content, {
  padding: '$2 $3',
  backgroundColor: '$slate7',

  '&:focus': {
    border: '1px solid $brand',
  },

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

export const TooltipProvider = TooltipPrimitive.Provider
export const TooltipRoot = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

interface TooltipProps {
  content: string | ReactNode | any
  side?: 'top' | 'bottom'
  align?: 'center' | 'start'
  avoidCollisions?: boolean
  delayDuration?: number | undefined
  children: React.ReactNode
}

export const Tooltip: FunctionComponent<TooltipProps> = ({
  content,
  side = 'bottom',
  align = 'center',
  delayDuration = 0,
  avoidCollisions,
  children,
}) => (
  <TooltipRoot delayDuration={delayDuration}>

    <TooltipTrigger asChild>

      <div>
        {children}
      </div>

    </TooltipTrigger>

    <TooltipContent
      avoidCollisions={avoidCollisions}
      side={side}
      align={align}
      radius={align}
      sideOffset={12}
    >
      {content}
    </TooltipContent>
  </TooltipRoot>
  
)

export default Tooltip

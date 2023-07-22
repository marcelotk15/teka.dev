import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'

import { cn } from '@/lib/utils'

import { Viewport } from './Viewport'

export const Root = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Root>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('relative z-10 flex flex-1 items-center justify-center', className)}
    {...props}
  >
    {children}
    <Viewport />
  </NavigationMenuPrimitive.Root>
))

Root.displayName = NavigationMenuPrimitive.Root.displayName

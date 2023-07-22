import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { ChevronDown } from 'lucide-react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const navigationMenuTriggerStyle = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-zinc-100 disabled:opacity-50 dark:focus:bg-zinc-800 disabled:pointer-events-none bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:hover:text-zinc-100 data-[state=open]:bg-zinc-50 dark:data-[state=open]:bg-zinc-800 h-10 py-2 px-4 group w-max',
)

export const Trigger = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}
  >
    {children}{' '}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
Trigger.displayName = NavigationMenuPrimitive.Trigger.displayName

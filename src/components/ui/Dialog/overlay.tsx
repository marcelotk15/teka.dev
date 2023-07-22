import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/lib/utils'

export const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100',
      className,
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

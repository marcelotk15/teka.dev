import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/lib/utils'

export const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

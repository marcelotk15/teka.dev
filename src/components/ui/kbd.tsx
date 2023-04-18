import { forwardRef, HTMLProps } from 'react'

import { cn } from '@/lib/utils'

export const Kbd = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(function Kbd(
  { className, children, ...props },
  ref,
) {
  return (
    <kbd
      ref={ref}
      className={cn(
        'pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium sm:flex',
        className,
      )}
      {...props}
    >
      <span className="text-xs">⌘</span>
      {children}
    </kbd>
  )
})

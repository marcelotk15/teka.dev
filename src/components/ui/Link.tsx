import { forwardRef, HTMLProps } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const linkVariants = cva('inline-block', {
  variants: {
    withUnderline: {
      true: 'relative after:absolute after:left-1/2 after:bottom-0 after:w-[calc(100%+.25rem)] after:h-px after:p-px after:rounded-md after:bg-zinc-400 dark:after:bg-zinc-700 after:-translate-x-1/2 hover:after:h-full after:-z-10 after:transition-all after:ease-in-out after:duration-200',
      false: '',
    },
  },
  defaultVariants: {
    withUnderline: false,
  },
})
export type LinkProps = HTMLProps<HTMLAnchorElement> &
  NextLinkProps &
  VariantProps<typeof linkVariants>

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { withUnderline, className, ...props },
  ref,
) {
  return (
    <NextLink className={cn(linkVariants({ withUnderline, className }))} {...props} ref={ref} />
  )
})

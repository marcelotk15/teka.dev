import { ExternalLink as Icon } from 'lucide-react'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { Link, LinkProps } from './Link'

type ExternalLinkProps = LinkProps & {
  showIcon?: boolean
}

export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(function ExternalLink(
  { showIcon = false, children, className, ...props },
  ref,
) {
  return (
    <Link
      className={cn('inline-flex items-baseline gap-2', className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      ref={ref}
    >
      {children}
      {showIcon && <Icon className="text-inherit" size={12} />}
    </Link>
  )
})

import { HTMLProps } from 'react'

import { cn } from '@/lib/utils'

export function AnimatedBars() {
  return (
    <div className="flex min-w-min items-baseline gap-[3px]">
      <AnimatedBar className="h-2 animate-music-bar-one" />
      <AnimatedBar className="h-1 animate-music-bar-two" />
      <AnimatedBar className="h-3 animate-music-bar-three" />
    </div>
  )
}

function AnimatedBar({ className, ...props }: HTMLProps<HTMLDivElement>) {
  return <div className={cn('w-1 bg-zinc-600', className)} {...props} />
}

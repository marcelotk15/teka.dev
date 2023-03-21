import { type SkeletonBaseProps } from '../ui/Skeleton'

export function NowPlayingSkeleton({ isLoading = true, children }: SkeletonBaseProps) {
  if (isLoading)
    return (
      <div className="max-w-sm animate-pulse rounded border border-zinc-200 p-4 shadow dark:border-zinc-700 dark:bg-zinc-800 md:p-6">
        <div className="h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
      </div>
    )

  return <>{children}</>
}

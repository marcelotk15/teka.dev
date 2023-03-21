import { PropsWithChildren } from 'react'

export interface SkeletonBase {
  /**
   * Control whether skeleton should be visible or not.
   */
  isLoading?: boolean

  /**
   * Control whether the shimmer effect should be displayed or not.
   */
  shimmer?: boolean

  /**
   * Specifies the skeleton element variant.
   */
  variant?: 'text' | 'button' | 'image' | 'badge'
}

export type SkeletonBaseProps = PropsWithChildren<SkeletonBase>

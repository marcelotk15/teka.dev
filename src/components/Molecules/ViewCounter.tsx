import { useCallback, useEffect } from 'react'
import useSWR from 'swr'

import fetcher from '@/src/lib/fetcher'
import { Views } from '@/src/@types/views'

import { Text } from '../Atoms/Text'

interface ViewCounterProps {
  slug: string
}

export function ViewCounter({ slug }: ViewCounterProps) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST',
    })
  }, [slug])

  return (
    <Text color="gray" size="sm">
      <>{data?.total || '----'} views</>
    </Text>
  )
}

import { useEffect } from 'react'
import useSWR from 'swr'

import { Text } from '@components/Atoms/Text'
import fetcher from '@lib/fetcher'
import { Views } from '@local-types/views'

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

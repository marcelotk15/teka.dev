import { useEffect } from 'react'
import useSWR from 'swr'
import useTranslation from 'next-translate/useTranslation'

import { Text } from '@components/Atoms/Text'
import fetcher from '@lib/fetcher'
import { Views } from '@local-types/views'

interface ViewCounterProps {
  slug: string
}

export function ViewCounter({ slug }: ViewCounterProps) {
  const { t } = useTranslation()

  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST',
    })
  }, [slug])

  return (
    <Text color="gray" size="sm">
      {t('blog:viewsCounter', { count: data?.total || '----' })}
    </Text>
  )
}

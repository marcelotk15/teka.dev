import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import * as HoverCard from '@radix-ui/react-hover-card'
import { useCallback } from 'react'

import { styled } from '@theme'
import { Text } from '@components/Atoms/Text'
import { Box } from '@components/Atoms/Box'

const Base = styled(Box, {
  padding: '$4',
  borderRadius: '$2',
  backgroundColor: '$toggleBackground',
})

const Locales = styled(Base, {
  mt: '$2',
  backgroundColor: '$slate8',
})

const LocaleOption = styled(Text, {
  cursor: 'pointer',
})

export function LanguageSwitch() {
  const { t } = useTranslation()

  const router = useRouter()

  const { locale, locales } = router

  const handleChangeLocale = useCallback(
    (locale: string) => {
      router.push(router.asPath, router.asPath, { locale })
    },
    [router],
  )

  return (
    <HoverCard.Root openDelay={200} closeDelay={100}>
      <HoverCard.Trigger>
        <Base aria-label={locale}>
          <Text size="sm" weight="bold">
            {t(`common:languages.small.${locale as string}`)}
          </Text>
        </Base>
      </HoverCard.Trigger>

      <HoverCard.Content>
        <Locales gap={4}>
          {locales?.map((locale) => (
            <LocaleOption
              key={locale}
              size="sm"
              weight="bold"
              onClick={() => handleChangeLocale(locale)}
            >
              {t(`common:languages.small.${locale}`)}
            </LocaleOption>
          ))}
        </Locales>
      </HoverCard.Content>
    </HoverCard.Root>
  )
}

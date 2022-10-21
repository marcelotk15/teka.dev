import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { useCallback } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '@theme'
import { Text } from '@components/Atoms/Text'
import { Box } from '@components/Atoms/Box'

const LocaleBase = styled(Box, {
  padding: '$4',
  borderRadius: '$2',
  backgroundColor: '$toggleBackground',
})

const Locales = styled(LocaleBase, {
  mt: '$2',
  backgroundColor: '$slate8',
})

const LocaleOption = styled(Text, {
  cursor: 'pointer',
})

const Trigger = styled(DropdownMenu.Trigger, {
  padding: 0,
  background: 'transparent',
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
    <DropdownMenu.Root>
      <Trigger css={{ ml: 'auto', '@lg': { ml: 0 } }}>
        <LocaleBase
          aria-label={locale}
          css={{ cursor: 'pointer', height: '50px', aspectRatio: '1/1', padding: 0 }}
          justify="center"
          items="center"
        >
          <Text weight="extrabold" size="sm">
            {t(`common:languages.small.${locale}`)}
          </Text>
        </LocaleBase>
      </Trigger>

      <DropdownMenu.Content>
        <Locales gap={4}>
          {locales?.map((locale) => (
            <LocaleOption
              key={locale}
              size="sm"
              weight="bold"
              onClick={() => handleChangeLocale(locale)}
            >
              <Text weight="extrabold" size="sm">
                {t(`common:languages.small.${locale}`)}
              </Text>
            </LocaleOption>
          ))}
        </Locales>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

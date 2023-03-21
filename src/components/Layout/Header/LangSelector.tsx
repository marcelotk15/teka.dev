import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/Icons'

import { locales } from '../../../../i18n'

export function LangSelector() {
  const { asPath } = useRouter()

  const { t, lang } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="subtle" size="sm">
          <Icons.languages className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" />
          <span className="sr-only">select language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {locales?.map((locale) => (
          <Link href={asPath} locale={locale} key={locale}>
            <DropdownMenuItem className="justify-between">
              {t(`common:locales.${locale}`)}

              {lang === locale && <Icons.check className="mr-2 h-4 w-4" />}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

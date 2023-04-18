import { useTheme } from 'next-themes'
import useTranslation from 'next-translate/useTranslation'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { Themes } from '@/config'

export function ThemeSelector() {
  const { setTheme } = useTheme()

  const { t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="subtle" size="sm">
          <Icons.sunMoon />
          <span className="sr-only">Theme selector</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {Themes.map(({ name, Icon }) => (
          <DropdownMenuItem key={name} onClick={() => setTheme(name)}>
            <div className="mr-2">
              <Icon size={16} />
            </div>
            {t(`common:theme.${name}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

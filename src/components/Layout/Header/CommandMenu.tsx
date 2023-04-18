import { useEffect, useState, useCallback, useMemo } from 'react'
import { DialogProps } from '@radix-ui/react-alert-dialog'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import { Command } from '@/components/ui/Command'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/Icons'
import { Themes } from '@/config'
import { Kbd } from '@/components/ui/kbd'

export function CommandMenu(props: DialogProps) {
  const [open, setOpen] = useState(false)

  const { setTheme } = useTheme()

  const router = useRouter()

  const { t } = useTranslation()

  const runCommand = useCallback((command: () => void) => {
    setOpen(false)

    command()
  }, [])

  const [menuRoutes, menuRoutesWithKey] = useMemo(() => {
    const routes = {
      b: {
        name: 'Blog',
        command: () => router.push('/blog'),
        Icon: Icons.pencil,
        key: 'B',
      },

      s: {
        name: 'Setup',
        command: () => router.push('/setup'),
        Icon: Icons.userCog,
        key: 'S',
      },
    }

    return [Object.values(routes), routes]
  }, [router])

  useEffect(() => {
    const toogleCommand = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()

        setOpen((open) => !open)
      }
    }

    const handleOpenRouter = (e: KeyboardEvent) => {
      const keys = Object.keys(menuRoutesWithKey)

      if (keys.includes(e.key) && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()

        const key = e.key as keyof typeof menuRoutesWithKey

        runCommand(menuRoutesWithKey[key]?.command)
      }
    }

    document.addEventListener('keydown', toogleCommand)
    document.addEventListener('keydown', handleOpenRouter)

    return () => {
      document.removeEventListener('keydown', toogleCommand)
      document.removeEventListener('keydown', handleOpenRouter)
    }
  }, [menuRoutesWithKey, runCommand])

  return (
    <>
      <Button variant="outline" className="gap-3" onClick={() => setOpen(true)} {...props}>
        <span>{t('common:commandMenu.menu')} </span>
        <Kbd>K</Kbd>
        <span className="sr-only">menu</span>
      </Button>

      <Command.Dialog open={open} onOpenChange={setOpen}>
        <Command.Input placeholder={t('common:commandMenu.placeholder')} />

        <Command.List>
          <Command.Empty>{t('common:commandMenu.noResults')}</Command.Empty>

          <Command.Group heading={t('common:commandMenu.navigation')}>
            {menuRoutes.map(({ Icon, command, name, key }) => (
              <Command.Item key={name} onSelect={() => runCommand(command)} className="flex">
                <div className="mr-2">
                  <Icon />
                </div>
                {name}

                <Kbd className="ml-auto">{key}</Kbd>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Separator />

          <Command.Group heading={t('common:commandMenu.theme')}>
            {Themes.map(({ Icon, name }) => (
              <Command.Item key={name} onSelect={() => runCommand(() => setTheme(name))}>
                <div className="mr-2">
                  <Icon />
                </div>
                {t(`common:theme.${name}`)}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  )
}

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonStars, Sun } from 'phosphor-react'

import { styled } from '@theme'

import { Tooltip } from './Atoms/Tooltip'
import { Button } from './Atoms/Button'
import { Text } from './Atoms/Text'

const ToggleStyled = styled('div', {
  display: 'inline-flex',
  gap: '$1',
  padding: '$2',
  borderRadius: '$2',
  backgroundColor: '$toggleBackground',
  marginLeft: 'auto',
  position: 'relative',

  '@desktop': {
    marginLeft: '$0',
  },
})

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const changeTheme = (theme: 'dark' | 'light') => {
    if (resolvedTheme === theme) return

    setTheme(theme)
  }

  return (
    <ToggleStyled>
      <Tooltip.Root content="Dark Theme">
        <Button
          onClick={() => changeTheme('dark')}
          background="transparent"
          border="transaprent"
          active={resolvedTheme === 'dark'}
          activeStyle={'gray'}
        >
          <MoonStars size={16} weight="duotone" />
        </Button>
      </Tooltip.Root>

      <Tooltip.Root content="Light Theme">
        <Button
          onClick={() => changeTheme('light')}
          background="transparent"
          activeStyle={'gray'}
          active={resolvedTheme === 'light'}
        >
          <Sun size={16} weight="duotone" />
        </Button>
      </Tooltip.Root>
    </ToggleStyled>
  )
}

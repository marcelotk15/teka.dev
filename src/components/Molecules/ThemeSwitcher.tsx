import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonStars, Sun } from 'phosphor-react'

import { styled } from '@theme'

import { Tooltip } from '../Atoms/Tooltip'
import { Button } from '../Atoms/Button'
import { Box } from '../Atoms/Box'

const Wrapper = styled(Box, {
  display: 'inline-flex',
  padding: '$2',
  borderRadius: '$2',
  backgroundColor: '$toggleBackground',
  marginLeft: 'auto',
  position: 'relative',

  '@lg': {
    marginLeft: '$0',
  },
})

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const changeTheme = (theme: 'dark' | 'light') => {
    if (resolvedTheme === theme) return

    setTheme(theme)
  }

  return (
    <Wrapper gap={1}>
      <Tooltip.Provider>
        <Tooltip.Root content="Dark Theme">
          <Button
            onClick={() => changeTheme('dark')}
            background={resolvedTheme === 'light' ? 'transparent' : undefined}
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
            background={resolvedTheme === 'dark' ? 'transparent' : undefined}
            activeStyle={'gray'}
            active={resolvedTheme === 'light'}
          >
            <Sun size={16} weight="duotone" />
          </Button>
        </Tooltip.Root>
      </Tooltip.Provider>
    </Wrapper>
  )
}

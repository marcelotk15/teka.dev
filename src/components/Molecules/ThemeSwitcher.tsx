import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'
import { MoonStars, Sun } from 'phosphor-react'

import { styled } from '@theme'
import { Box } from '@components/Atoms/Box'
import { Tooltip } from '@components/Atoms/Tooltip'
import { Button } from '@components/Atoms/Button'

const Wrapper = styled(Box, {
  display: 'inline-flex',
  padding: '$2',
  borderRadius: '$2',
  backgroundColor: '$toggleBackground',
  position: 'relative',
})

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => setMounted(true), [])

  const handleToogleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [setTheme, theme])

  if (!mounted) return null

  const isThemeLight = theme === 'light'

  const Icon = isThemeLight ? MoonStars : Sun

  return (
    <Wrapper gap={1}>
      <Tooltip.Provider>
        <Tooltip.Root content={`${isThemeLight ? 'Dark' : 'Light'} Theme`}>
          <Button
            onClick={handleToogleTheme}
            background="transparent"
            border="transaprent"
            activeStyle={'gray'}
            aria-label="toogle theme"
          >
            <Icon size={18} weight="duotone" />
          </Button>
        </Tooltip.Root>
      </Tooltip.Provider>
    </Wrapper>
  )
}

// import Link from 'next/link'
import { useRouter } from 'next/router'
import { isMobile } from 'react-device-detect'
import { ChangeEvent } from 'react'

import { styled } from '@theme'
import { Logo } from '@components/Atoms/Logo'
import { Tooltip } from '@components/Atoms/Tooltip'
import { Button } from '@components/Atoms/Button'
import { Box } from '@components/Atoms/Box'
import { BurgerMenuButton } from '@components/Molecules/BurgerMenuButton'
import { ThemeSwitcher } from '@components/Molecules/ThemeSwitcher'
import { Container } from '@components/Atoms/Container'
import { useMobileMenuState } from 'src/hooks/mobileMenu'
import { navigationLinks, navigationLinksSocials } from '@data'
import { Link } from '@components/Atoms/Link'
import { LanguageSwitch } from '@components/Molecules/LanguageSwitch'

const Wrapper = styled('header', {
  userSelect: 'none',
  position: 'sticky',
  top: 0,
  py: '$5',
  backdropFilter: 'blur(.15rem)',
  zIndex: '$sticky',

  '&:before': {
    content: '',
    position: 'absolute',
    backgroundColor: '$background',
    opacity: 0.45,
    inset: 0,
    zIndex: '$hide',
  },
})

const Navigation = styled('nav', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',

  '@lg': {
    gap: '$8',
    justifyContent: 'space-between',
  },
})

const Links = styled(Box, {
  flexDirection: 'column',
  display: 'none',
  position: 'absolute',
  inset: 0,
  height: '100vh',
  padding: '$28 $8 $4',

  '@lg': {
    padding: '$0',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    position: 'static',
    gap: '$8',
    height: 'auto',
    backgroundColor: 'transparent',
  },

  variants: {
    opened: {
      true: {
        display: 'flex',
        backgroundColor: '$slate6',
        gap: '$12',
      },
    },
  },
})

const LinkGroup = styled(Box, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$4',

  '@lg': {
    position: 'relative',

    '&:after': {
      content: '',
      width: '$px',
      height: '50%',
      position: 'absolute',
      display: 'block',
      top: '50%',
      transform: 'translateY(-50%)',
      right: '-$4',
      backgroundColor: '$slate9',
    },
  },

  variants: {
    opened: {
      true: {
        flexDirection: 'column',

        a: {
          width: '$full',
          fontSize: '$2',

          button: {
            fontSize: '$2',
          },
        },
      },
    },
  },
})

export function Header() {
  const router = useRouter()
  const { pathname } = router

  const { open: opened } = useMobileMenuState()

  return (
    <Wrapper>
      <Container>
        <Navigation>
          <Link href="/" title="Home" aria-label="go to home" withoutUnderline>
            <Box css={{ height: '$10', zIndex: '$5' }}>
              <Logo />
            </Box>
          </Link>

          <Links opened={opened}>
            <Tooltip.Provider>
              <LinkGroup opened={opened}>
                {navigationLinks.map(({ name, to, Icon }) => (
                  <Link key={name} href={to} withoutUnderline>
                    <Tooltip.Root content={name}>
                      <Button
                        background={'transparent'}
                        active={pathname === to}
                        css={{
                          justifyContent: 'space-between',
                          width: '100%',
                          alignItems: 'center',
                          padding: '$3',
                        }}
                        aria-label={`open ${name}`}
                      >
                        {isMobile && name}

                        <Icon size={isMobile ? 24 : 18} weight="duotone" />
                      </Button>
                    </Tooltip.Root>
                  </Link>
                ))}
              </LinkGroup>

              <LinkGroup opened={opened}>
                {navigationLinksSocials.map(({ name, to, Icon }) => (
                  <Link key={name} href={to} withoutUnderline>
                    <Tooltip.Root content={name}>
                      <Button
                        background={'transparent'}
                        css={{ justifyContent: 'space-between', width: '100%', padding: '$3' }}
                        aria-label={`open ${name}`}
                      >
                        {isMobile && name}

                        <Icon size={isMobile ? 24 : 18} weight="duotone" />
                      </Button>
                    </Tooltip.Root>
                  </Link>
                ))}
              </LinkGroup>
            </Tooltip.Provider>
          </Links>

          <LanguageSwitch />

          <ThemeSwitcher />

          <BurgerMenuButton />
        </Navigation>
      </Container>
    </Wrapper>
  )
}

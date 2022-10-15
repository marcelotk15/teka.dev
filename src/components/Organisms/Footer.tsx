import Link from 'next/link'

import { styled } from '@theme'
import { navigationLinks, navigationLinksSocials } from '@/data'

import { NowPlaying } from '../Molecules/NowPlaying'
import { Box } from '../Atoms/Box'
import { Logo } from '../Atoms/Logo'
import { Container } from '../Atoms/Container'

const Wrapper = styled('footer', {
  mt: '$14',
})

const FooterContent = styled(Box, {
  py: '$24',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$8',

  '@desktop': {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
const LinkLogo = styled('a', {
  display: 'block',
  color: '$slate8',
  height: '$8',
})

const LinkStyled = styled('a', {
  color: '$slate11',

  '&:hover': {
    color: '$slate12',
  },
})

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <NowPlaying />

        <FooterContent justify="spaceBetween" css={{ py: '$24' }}>
          <Link href="/" passHref>
            <LinkLogo title="teka">
              <Logo currentColor />
            </LinkLogo>
          </Link>

          <Box css={{ gap: '$12' }}>
            <Box column>
              {navigationLinks.map(({ to, name }) => (
                <Link key={to} href={to} passHref>
                  <LinkStyled title={name}>{name}</LinkStyled>
                </Link>
              ))}
            </Box>

            <Box column>
              {navigationLinksSocials.map(({ to, name }) => (
                <LinkStyled
                  key={to}
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`teka's ${name} page`}
                >
                  {name}
                </LinkStyled>
              ))}
            </Box>
          </Box>
        </FooterContent>
      </Container>
    </Wrapper>
  )
}

import Link from 'next/link'

import { styled } from '@theme'
import { navigationLinks, navigationLinksSocials } from '@/data'

import { Container } from '..'
import { NowPlaying } from '../Molecules/NowPlaying'
import { Box } from '../Atoms/Box'
import { Logo } from '../Atoms/Logo'

const Wrapper = styled('footer', {
  mt: '$14',
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

        <Box flex justify="spaceBetween" css={{ py: '$24' }}>
          <Link href="/" passHref>
            <LinkLogo>
              <Logo currentColor />
            </LinkLogo>
          </Link>

          <Box flex css={{ gap: '$4' }}>
            <Box flex column>
              {navigationLinks.map(({ to, name }) => (
                <Link key={to} href={to} passHref>
                  <LinkStyled>{name}</LinkStyled>
                </Link>
              ))}
            </Box>

            <Box flex column>
              {navigationLinksSocials.map(({ to, name }) => (
                <LinkStyled key={to} href={to} target="_blank" rel="noopener noreferrer">
                  {name}
                </LinkStyled>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  )
}

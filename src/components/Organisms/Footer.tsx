import { styled } from '@theme'
import { navigationLinks, navigationLinksSocials } from '@/data'

import { NowPlaying } from '../Molecules/NowPlaying'
import { Box } from '../Atoms/Box'
import { Logo as LogoComponent } from '../Atoms/Logo'
import { Container } from '../Atoms/Container'
import { Link as LinkComponent } from '../Atoms/Link'

const Wrapper = styled('footer', {
  mt: '$14',
})

const FooterContent = styled(Box, {
  py: '$24',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$8',
  color: '$slate11',

  '@lg': {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const Logo = styled(LogoComponent, {
  height: '$8',
})

const Link = styled(LinkComponent, {
  color: '$slate9',
  fontWeight: '$semibold',

  '&:hover': {
    color: '$slate7',
  },
})

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <NowPlaying />

        <FooterContent justify="spaceBetween" css={{ py: '$24' }}>
          <Link title="teka" withoutUnderline href="/">
            <Logo currentColor />
          </Link>

          <Box css={{ gap: '$12' }}>
            <Box column gap={1}>
              {navigationLinks.map(({ to, name }, index) => (
                <Link key={index} href={to} title={name} withoutUnderline>
                  {name}
                </Link>
              ))}
            </Box>

            <Box column gap={1}>
              {navigationLinksSocials.map(({ to, name }) => (
                <Link
                  key={to}
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`teka's ${name} page`}
                  showExternalIcon
                  withoutUnderline
                >
                  {name}
                </Link>
              ))}
            </Box>
          </Box>
        </FooterContent>
      </Container>
    </Wrapper>
  )
}

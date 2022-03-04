import Link from 'next/link';
import { useRouter } from 'next/router';

import { styled } from '@theme'

import { Container, Logo, ThemeToggle, Tooltip, P } from './index'

import { navigationLinks, navigationLinksSocials } from "@/data";
import BurgerMenu from './burgerMenu';
import { useMobileMenuActions, useMobileMenuState } from '@/hooks/mobileMenu';
 
const HeaderStyled = styled('header', {
  zIndex: "$sticky",
  userSelect: "none",
  position: 'sticky',
  top: '$0',
  py: '$6',
  backdropFilter: 'blur(.25rem)',

  '&:before': {
    content: '',
    position: 'absolute',
    backgroundColor: '$background',
    opacity: .65,
    inset: '$0'
  }
});

const Navigation = styled('nav', {
  width: '$full',
  display: 'flex',
  gap: '$8',
  alignItems: 'center',

  '@desktop': {
    justifyContent: 'space-between',
  }
});

const NavigationLogo = styled('div', {
  position: 'relative',
});

const NavigationGroupLinks = styled('div', {
  flexDirection: 'column',
  display: 'none',
  position: 'absolute',
  top: '$0',
  left: '$0',
  bottom: '$0',
  right: '$0',
  height: '100vh',
  pt: '$28',
  px: '$8',
  pb: '$4',

  '@desktop': {
    padding: '$0',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    position: 'static',
    gap: '$8',
    height: 'auto',
    backgroundColor: 'transparent',
    transform: 'none'
  },

  variants: {
    mobileMenu: {
      true: {
        display: 'flex',
        backgroundColor: '$slate6',
        gap: '$12'
      }
    }
  }
});

const LinkGroup = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$4',
  position: 'relative',

  '&:after': {
    content: '',
    width: '$px',
    height: '50%',
    position: 'absolute',
    display: 'none',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '-$4',
    backgroundColor: '$slate9',

    '@desktop': {
      display: 'block'
    }
  },

  a: {
    '&.active div': {
      boxShadow: '-15px 0 30px -10px var(--colors-orangeA7), 0 0 30px -10px var(--colors-pinkA7), 15px 0 30px -10px var(--colors-violetA7), inset 0 0 0 1px var(--colors-pinkA7), 0 0 0 1px var(--colors-pinkA7)'
    },

    div: {
      borderRadius: '$2',
      padding: '$3',
      color: '$buttonText',
      transition: 'all .5s ease-in-out',

      '@desktop': { fontSize: '0'},

      '&:hover': {
        boxShadow: '-15px 0 30px -10px var(--colors-orangeA8), 0 0 30px -10px var(--colors-pinkA8), 15px 0 30px -10px var(--colors-violetA8), 0 0 0 1px var(--colors-pinkA7)'
      },

      svg: {
        size: '$4'
      }
    },
  },

  variants: {
    mobileMenu: {
      true: {
        flexDirection: 'column',

        a: {
          width: '$full',

          div: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '$6',
            fontSize: '$2',

            svg: {
              size: '$6'
            }
          },
        }
      }
    }
  }
});

export function Header () {
  const router = useRouter();
  const { open: mobileMenu } = useMobileMenuState();

  return (
    <HeaderStyled>
      <Container>
        <Navigation>
          <NavigationLogo>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </NavigationLogo>

          <NavigationGroupLinks mobileMenu={ mobileMenu }>
            <LinkGroup mobileMenu={ mobileMenu }>
              {navigationLinks.map(({ name, to, Icon }) =>
                <Link
                  key={name}
                  href={to}
                >
                  <a className={ router.pathname === to ? 'active' : '' }>
                    <Tooltip
                      content={
                        <P size="-1" margin="none" weight="semibold">
                          {name}
                        </P>
                      }
                    >
                      {name}

                      <Icon />
                    </Tooltip>
                  </a>
                </Link>
              )}
            </LinkGroup>

            <LinkGroup mobileMenu={ mobileMenu }>
              {navigationLinksSocials.map(({ name, to, Icon }) =>
                <a href={to} target="_blank" rel="noreferrer" key={name}>
                  <Tooltip
                    content={
                      <P size="-1" margin="none" weight="semibold">
                        {name}
                      </P>
                    }
                  >
                    {name}

                    <Icon />
                  </Tooltip>
                </a>
              )}
            </LinkGroup>

          </NavigationGroupLinks>
          
          <ThemeToggle />

          <BurgerMenu />

        </Navigation>
      </Container>
    </HeaderStyled>
  );
}

import Link from 'next/link';
import { useRouter } from 'next/router';

import { styled } from '@theme'

import { Container, Logo, ThemeToggle, Tooltip, P } from './index'

import { navigationLinks, navigationLinksSocials } from "@/data";
import BurgerMenu from './burgerMenu';
 
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
  position: 'relative',

  '@desktop': {
    justifyContent: 'space-between',
  }
});

const NavigationLogo = styled('div', {});

const NavigationGroupLinks = styled('div', {
  flexDirection: 'column',
  gap: '$8',
  display: 'none',

  '@desktop': {
    flexDirection: 'row',
    marginLeft: 'auto',
    display: 'flex'
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
    top: '50%',
    transform: 'translateY(-50%)',
    right: '-$4',
    backgroundColor: '$slate9',
  },

  a: {
    '&.active div': {
      boxShadow: '-15px 0 30px -10px var(--colors-orangeA7), 0 0 30px -10px var(--colors-pinkA7), 15px 0 30px -10px var(--colors-violetA7), inset 0 0 0 1px var(--colors-pinkA7), 0 0 0 1px var(--colors-pinkA7)'
    },

    div: {
      borderRadius: '$2',
      padding: '$3',
      color: '$buttonText',
      transition: 'all .5s',

      '@desktop': { fontSize: '0'},

      '&:hover': {
        boxShadow: '-15px 0 30px -10px var(--colors-orangeA8), 0 0 30px -10px var(--colors-pinkA8), 15px 0 30px -10px var(--colors-violetA8), 0 0 0 1px var(--colors-pinkA7)'
      },

      svg: {
        size: '$4'
      }
    },
  }
});

export function Header () {
  const router = useRouter();

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

          <NavigationGroupLinks>
            <LinkGroup>
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
                      <Icon />

                      {name}
                    </Tooltip>
                  </a>
                </Link>
              )}
            </LinkGroup>

            <LinkGroup>
              {navigationLinksSocials.map(({ name, to, Icon }) =>
                <a href={to} target="_blank" key={name}>
                  <Tooltip
                    content={
                      <P size="-1" margin="none" weight="semibold">
                        {name}
                      </P>
                    }
                  >
                    <Icon />

                    {name}

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

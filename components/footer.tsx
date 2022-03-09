import Link from 'next/link';
import { ReactNode } from 'react';
import { Container, Flex } from '.';

import { styled } from '@theme';

import NowPlaying from './nowPlaying';
import { navigationLinks, navigationLinksSocials } from '@/data';

const CustomLink = (props: { href: string, children: ReactNode }) => {
  const { href, children } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  const LinkStyled = styled('a', {
    color: '$slate11',

    '&:hover': {
      color: '$slate12',
    }
  });

  if (isInternalLink) {
    return (
      <Link href={href}>
        <LinkStyled {...props}>
          {children}
        </LinkStyled>
      </Link>
    );
  }

  return <LinkStyled target="_blank" rel="noopener noreferrer" {...props} />;
};

const HR = styled('hr', {
  width: '$full',
  border: '1px solid $slate6',
  mb: '$8'
});

const FooterStyled = styled('div', {
  width: '$full',
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gap: '$4',
  pb: '$16',

  '@desktop': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
  }
});

export default function Footer() {
  return (
    <footer>

      <Container>

        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'flexStart'} css={{ mb: '$8' }}>

          <HR />

          <NowPlaying />

          <FooterStyled>
            
            <Flex flexDirection='column' css={{ gap: '$4' }}>
              {navigationLinks.map((link) => (
                <CustomLink href={link.to}>
                  {link.name}
                </CustomLink>
              ))}
            </Flex>

            <Flex flexDirection='column' css={{ gap: '$4' }}>
              {navigationLinksSocials.map((link) => (
                <CustomLink href={link.to}>
                  {link.name}
                </CustomLink>
              ))}
            </Flex>

            {/* <Flex flexDirection='column' css={{ gap: '$4' }}>
              <Link href="/uses">
                <a className="text-gray-500 hover:text-gray-600 transition">Uses</a>
              </Link>
              <Link href="/guestbook">
                <a className="text-gray-500 hover:text-gray-600 transition">
                  Guestbook
                </a>
              </Link>
              <Link href="/snippets">
                <a className="text-gray-500 hover:text-gray-600 transition">
                  Snippets
                </a>
              </Link>
              <Link href="/tweets">
                <a className="text-gray-500 hover:text-gray-600 transition">
                  Tweets
                </a>
              </Link>
            </Flex> */}

          </FooterStyled>

        </Flex>

      </Container>

    </footer>
  );
}

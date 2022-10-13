import Link from 'next/link';
import Image from 'next/image';

import { ProsCard } from './prosCards';
import { ConsCard } from './consCard';
// import Gumroad from 'components/metrics/Gumroad';
// import Unsplash from 'components/metrics/Unsplash';
// import Analytics from 'components/metrics/Analytics';
// import YouTube from 'components/metrics/Youtube';
// import Step from 'components/Step';
// import ImageWithTheme from 'components/ImageWithTheme';

import { ReactNode } from 'react';

import { styled } from "@theme";

const CustomLink = (props: { href: string, children: ReactNode }) => {
  const { href, children } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  const LinkStyled = styled('a', {
    textDecoration: 'underline',
    color: '$crimson9',
    textDecorationThickness: '2px',
    textUnderlineOffset: '1.7px',

    '&:hover': {
      color: '$crimson11',
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

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  ConsCard,
  ProsCard,
  // ImageWithTheme,
  // Analytics,
  // Gumroad,
  // Step,
  // Unsplash,
  // YouTube
};

export default MDXComponents;

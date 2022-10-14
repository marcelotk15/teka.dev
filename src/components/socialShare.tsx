import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io'
import { useEffect, useState } from 'react'

import { styled } from '@theme'

import { Flex, P } from '.'

interface SocialShareProps {
  title: string
}

const Link = styled('a', {
  color: 'inherit',
  padding: '$2 $4',
  borderRadius: '$1',

  '&:hover': {
    color: 'inherit',
  },
})

export function SocialShare({ title }: SocialShareProps) {
  const [url, setUrl] = useState<string>()

  useEffect(() => setUrl(window.location.href || ''), [])

  const socialLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      label: 'Twitter',
      icon: IoLogoTwitter,
      bg: '#1DA1F2',
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      label: 'Facebook',
      icon: IoLogoFacebook,
      bg: '#4267B2',
    },
    {
      href: `https://www.linkedin.com/shareArticle?url=${url}&title=${title}`,
      label: 'LinkedIn',
      icon: IoLogoLinkedin,
      bg: '#2867B2',
    },
  ]

  return (
    <Flex flexDirection="column" css={{ gap: '$3' }}>
      <P>Share</P>

      <Flex css={{ gap: '$2' }}>
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            style={{ backgroundColor: link.bg, padding: '.5rem 1rem' }}
            href={link.href}
          >
            <link.icon />
          </Link>
        ))}
      </Flex>
    </Flex>
  )
}

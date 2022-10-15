import { useEffect, useState } from 'react'
import { LinkedinLogo, TwitterLogo } from 'phosphor-react'

import { styled } from '@theme'

import { Text } from './Atoms/Text'
import { Box } from './Atoms/Box'

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
      icon: TwitterLogo,
      bg: '#1DA1F2',
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      label: 'Facebook',
      icon: Faceboo,
      bg: '#4267B2',
    },
    {
      href: `https://www.linkedin.com/shareArticle?url=${url}&title=${title}`,
      label: 'LinkedIn',
      icon: LinkedinLogo,
      bg: '#2867B2',
    },
  ]

  return (
    <Box column gap={3}>
      <Text>Share</Text>

      <Box gap={2}>
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            style={{ backgroundColor: link.bg, padding: '.5rem 1rem' }}
            href={link.href}
          >
            <link.icon />
          </Link>
        ))}
      </Box>
    </Box>
  )
}

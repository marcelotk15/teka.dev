import { Icon, Icons } from '@/components/Icons'

export * from './seo'

export interface Link {
  name: string
  href: string
  Icon: Icon
}

export const NavigationLinks: Link[] = [
  { name: 'Home', href: '/', Icon: Icons.home },
  // { to: '/blog', name: 'Blog', Icon: Icons.pencil },
  // { to: '/guestbook', name: 'Guestbook', Icon: BookBookmark },
  // { to: '/dashboard', name: 'Dashboard', Icon: IdentificationCard },
]

export const SocialLinks: Link[] = [
  { name: 'Twitter', href: 'https://twitter.com/_marcelotk', Icon: Icons.twitter },
  { name: 'Github', href: 'https://github.com/marcelotk15', Icon: Icons.github },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/marcelo-augusto-s-oliveira/',
    Icon: Icons.linkedin,
  },
]

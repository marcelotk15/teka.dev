import {
  // BookBookmark,
  House,
  PencilSimple,
  IdentificationCard,
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
} from 'phosphor-react'

export const navigationLinks = [
  { to: '/', name: 'Home', Icon: House },
  { to: '/blog', name: 'Blog', Icon: PencilSimple },
  // { to: '/guestbook', name: 'Guestbook', Icon: BookBookmark },
  { to: '/dashboard', name: 'Dashboard', Icon: IdentificationCard },
]

export const navigationLinksSocials = [
  { to: 'https://twitter.com/_marcelotk', name: 'Twitter', Icon: TwitterLogo },
  { to: 'https://github.com/marcelotk15', name: 'Github', Icon: GithubLogo },
  {
    to: 'https://linkedin.com/in/marcelo-augusto-s-oliveira/',
    name: 'LinkedIn',
    Icon: LinkedinLogo,
  },
]

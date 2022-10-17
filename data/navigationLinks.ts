import {
  GithubLogo,
  House,
  IconProps,
  LinkedinLogo,
  PencilSimple,
  TwitterLogo,
} from 'phosphor-react'
import { ForwardRefExoticComponent } from 'react'

interface NavigationLink {
  to: string
  name: string
  Icon: ForwardRefExoticComponent<IconProps>
}

export const navigationLinks: NavigationLink[] = [
  { to: '/', name: 'Home', Icon: House },
  { to: '/blog', name: 'Blog', Icon: PencilSimple },
]

export const navigationLinksSocials: NavigationLink[] = [
  { to: 'https://twitter.com/_marcelotk', name: 'Twitter', Icon: TwitterLogo },
  { to: 'https://github.com/marcelotk15', name: 'Github', Icon: GithubLogo },
  {
    to: 'https://linkedin.com/in/marcelo-augusto-s-oliveira/',
    name: 'LinkedIn',
    Icon: LinkedinLogo,
  },
]

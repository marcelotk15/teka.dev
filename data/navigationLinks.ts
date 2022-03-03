import { IconType } from "react-icons";
import { BiHome } from "react-icons/bi";
import { RiPencilLine, RiTwitterLine } from "react-icons/ri";
import { FiGithub, FiLinkedin } from "react-icons/fi";

interface NavigationLink {
  to: string,
  name: string,
  Icon: IconType
}

export const navigationLinks: NavigationLink[] = [
  { to: '/', name: 'Home', Icon: BiHome },
  { to: '/blog', name: 'Blog', Icon: RiPencilLine },
];

export const navigationLinksSocials: NavigationLink[] = [
  { to: 'https://twitter.com/_marcelotk', name: 'Twitter', Icon: RiTwitterLine },
  { to: 'https://github.com/marcelotk15', name: 'Github', Icon: FiGithub },
  { to: 'https://linkedin.com/in/marcelo-augusto-s-oliveira/', name: 'LinkedIn', Icon: FiLinkedin },
]

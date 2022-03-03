import Link from "next/link";
import { useRouter } from "next/router";
import { BiHome } from "react-icons/bi";
import { RiPencilLine, RiTwitterLine } from "react-icons/ri";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import { Icon, MenuContainer, MenuItem, MenuSection } from "./menu.styles";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const IconTooltip = () => (
  <TooltipPrimitive.Provider delayDuration={0}>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger>
        trigger
      </TooltipPrimitive.Trigger>

      <TooltipPrimitive.Content>
        content
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);

export default function Menu () {
  const router = useRouter();

  return (
    <MenuContainer>
      <MenuSection>
        <MenuItem active={ router.pathname === "/" ? "yes" : undefined }>
          <Link href="/">
            <a>

              <IconTooltip />
              <Icon>
                <BiHome />
              </Icon>

              <span>
                Home
              </span>
            </a>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link href="/blog">
            <a>
              <Icon>
                <RiPencilLine />
              </Icon>

              <span>
                Blog
              </span>
            </a>
          </Link>
        </MenuItem>
      </MenuSection>

      <MenuSection>
        <MenuItem>
          <a href="https://twitter.com/_marcelotk" target="_blank">
            <Icon>
              <RiTwitterLine />
            </Icon>

            <span>
              Twitter
            </span>
          </a>
        </MenuItem>

        <MenuItem>
          <a href="https://github.com/marcelotk15" target="_blank">
            <Icon>
              <FiGithub />
            </Icon>

            <span>
              Github
            </span>
          </a>
        </MenuItem>

        <MenuItem>
          <a href="hlinkedin.com/in/marcelo-augusto-s-oliveira/" target="_blank">
            <Icon>
              <FiLinkedin />
            </Icon>

            <span>
              LinkedIn
            </span>
          </a>
        </MenuItem>
      </MenuSection>
    </MenuContainer>
  );
}

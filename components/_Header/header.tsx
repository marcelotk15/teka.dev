import Link from "next/link";

import { Container } from "..";
import ThemeToggle from "./themeToggle";

import {
  HeaderActions,
  HeaderContainer,
  HeaderLogoContainer,
  Nav
} from "./header.styles";

import Logo from "../../assets/logo.svg";
import BurgerMenu from "./burgerMenu";
import Menu from "./menu";

export default function Header () {
  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <HeaderLogoContainer>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </HeaderLogoContainer>

          <HeaderActions>
            <Menu />

            <ThemeToggle />

            <BurgerMenu />
          </HeaderActions>
        </Nav>
      </Container>
    </HeaderContainer>
  )
}

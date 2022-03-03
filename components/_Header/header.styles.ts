import { styled } from "@theme";

export const HeaderContainer = styled('header', {
  backgroundColor: '$loContrastA',
  position: 'sticky',
  top: 0,
  width: '100%',
  backdropFilter: 'blur(20px)',
  padding: '$rg 0'
});

export const Nav = styled("nav", {
  display: 'flex',
  justifyContent: "space-between",
  alignItems: "center",

  "@desktop": {
    justifyContent: "flex-start",
    gap: "$xxl"
  }
});

export const HeaderLogoContainer = styled("div", {
  display: 'flex',
  justifyContent: "space-between",
  alignItems: "center",

  "& > a svg": {
    height: "$xl"
  }
});

export const HeaderActions = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$md",

  "@desktop": {
    gap: "$lg"
  }
});

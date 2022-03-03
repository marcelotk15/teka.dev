import { styled } from "@theme";

export const BurgerButton = styled("button", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  gap: "$1",
  width: "$5",
  height: "$5",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "$0",
  zIndex: "$overlay",

  "@desktop": {
    display: "none"
  },

  "&:focus": {
    outline: "none"
  },

  "div": {
    position: "relative",
    width: "$full",
    height: ".15rem",
    borderRadius: "$full",
    transition: "all 0.3s linear",
    transformOrigin: "1px",
    backgroundColor: "$hiContrast"
  }
});

export default function BurgerMenu () {
  return (
    <BurgerButton>
      <div />
      <div />
      <div />
    </BurgerButton>
  );
}

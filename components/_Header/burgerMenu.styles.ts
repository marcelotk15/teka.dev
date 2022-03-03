import { styled } from "@/theme";

export const Burger = styled("button", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  gap: "$xs",
  width: "1.25rem",
  height: "1.25rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,
  zIndex: 10,

  "@desktop": {
    display: "none"
  },

  "&:focus": {
    outline: "none"
  },

  "div": {
    width: "100%",
    height: "0.25rem",
    borderRadius: "10px",
    transition: "all 0.3s linear",
    position: "relative",
    transformOrigin: "1px",
    backgroundColor: "$hiContrast"
  }
});


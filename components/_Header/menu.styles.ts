import { styled } from "@/theme";

export const MenuContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$lg",

  "@desktop": {
    flexDirection: "row"
  }
});

export const MenuSection = styled("ul", {
  margin: "0",
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  padding: 0,
  gap: "$xs",

  "@desktop": {
    flexDirection: "row",
    position: "relative",

    "&:after": {
      content: "",
      position: "absolute",
      right: "-1rem",
      top: "50%",
      transform: "translateY(-50%)",
      width: "1px",
      height: "50%",
      backgroundColor: "$hiContrast"
    }
  }
});

export const MenuItem = styled('li', {
  borderRadius: "$default",

  variants: {
    active: {
      yes: {
        backgroundImage: "$gradientPurple",

        "i": {
          color: "$loContrast",
        }
      }
    }
  },

  "@desktop": {
    position: "relative"
  },

  "span": {
    "@desktop": {
      display: "none",
      position: "absolute",
      top: "110%",
      right: "50%",
      transform: "translateX(-50%)"
    }
  },  

  "a": {
    display: "flex",
    padding: "$sm",
    position: "initial"
  },

  "&:hover": {
    backgroundImage: "$gradientSalmon",

    "i": {
      color: "$loContrast",
    },

    "@desktop": {
      "span": {
        display: "block"
      }
    }
  }
});

export const Icon = styled('i', {
  color: "$hiContrast",
  width: "1rem",
  height: "1rem",

  "svg": {
    width: "100%",
    height: "100%"
  }
});

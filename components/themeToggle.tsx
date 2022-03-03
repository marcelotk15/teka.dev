import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

import { styled } from "@theme";
import { P, Tooltip } from ".";

const ToggleStyled = styled('div', {
  display: 'inline-flex',
  gap: "$1",
  padding: "$1",
  borderRadius: "$2",
  backgroundColor: "$toggleBackground",
  marginLeft: 'auto',

  '@desktop': {
    marginLeft: '$0'
  }
});

const ToggleButton = styled('button', {
  outline: '$focusOutline',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "$2",
  borderRadius: '$2',
  backgroundColor: 'transparent',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundImage: '$gdActive',
    backgroundColor: 'transparent',
    color: '$white'
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$slate9',

        '&:hover': {
          boxShadow: 'none'
        }
      }
    }
  }
});

export function ThemeToggle () {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const changeTheme = (theme: "dark" | 'light') => {
    if (resolvedTheme === theme) return;

    setTheme(theme);
  };

  return (
    <ToggleStyled>
      <Tooltip
        content={
          <P size="-1" margin="none" weight="semibold">
            Dark Theme
          </P>
        }
      >

        <ToggleButton
          onClick={() => changeTheme('dark')}
          active={ resolvedTheme === "dark" }
        >
          <RiMoonLine size={20} />
        </ToggleButton>

      </Tooltip>

      <Tooltip
        content={
          <P size="-1" margin="none" weight="semibold">
            Light Theme
          </P>
        }
      >

        <ToggleButton
          onClick={() => changeTheme('light')}
          active={ resolvedTheme === "light" }
        >
          <RiSunLine size={20} />
        </ToggleButton>

      </Tooltip>
    </ToggleStyled>
  );
}

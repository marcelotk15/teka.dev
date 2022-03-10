import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { darkTheme } from "@theme";
import { Texture } from '@/components'
import { MobileMenuProvider } from "@/hooks/mobileMenu";

import '@/styles/dracula-prism.css'

export default function App({ Component, pageProps }: AppProps) {
  const themeProviderProps = {
    attribute: 'class',
    defaultTheme: 'dark',
    value: {
      dark: darkTheme.className,
      light: "light-theme"
    }
  };

  return (
    <ThemeProvider { ...themeProviderProps }>
      <MobileMenuProvider>
        <Component {...pageProps} />

        <Texture />
      </MobileMenuProvider>
    </ThemeProvider>
  );
}

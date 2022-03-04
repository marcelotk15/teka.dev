import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { darkTheme } from "@theme";
import { Texture, Header } from '@/components'
import { MobileMenuProvider } from "@/hooks/mobileMenu";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        dark: darkTheme.className,
        light: "light-theme"
      }}
    >
      <MobileMenuProvider>
        <Header />
      </MobileMenuProvider>

      <Component {...pageProps} />

      <Texture />
    </ThemeProvider>
  );
}

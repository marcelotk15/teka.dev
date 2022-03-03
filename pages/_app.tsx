import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { darkTheme } from "@theme";
import { Texture, Header } from '@/components'

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
      <Header />

      <Component {...pageProps} />

      <Texture />
    </ThemeProvider>
  );
}

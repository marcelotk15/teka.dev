import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

import { darkTheme } from '@theme'
import { Analytics } from '@components/Organisms/Analytics'

import { MobileMenuProvider } from '../hooks/mobileMenu'

import '../styles/fonts.css'
import '../styles/dracula-prism.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session
}>) {
  const themeProviderProps = {
    attribute: 'class',
    defaultTheme: 'dark',
    value: {
      dark: darkTheme.className,
      light: 'light-theme',
    },
  }

  return (
    <>
      <Analytics />

      <SessionProvider session={session}>
        <ThemeProvider {...themeProviderProps}>
          <MobileMenuProvider>
            <Component {...pageProps} />
          </MobileMenuProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

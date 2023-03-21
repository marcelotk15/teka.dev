import '@/styles/globals.css'

import { type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'

import { api } from '@/utils/api'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const dystopian = localFont({
  src: [
    {
      path: '../../public/fonts/dystopian/dystopian-ligth.woff2',
      weight: '300',
    },

    {
      path: '../../public/fonts/dystopian/Dystopian-Regular.woff2',
      weight: '400',
    },

    {
      path: '../../public/fonts/dystopian/dystopian-bold.woff2',
      weight: '700',
    },

    {
      path: '../../public/fonts/dystopian/dystopian-black.woff2',
      weight: '900',
    },
  ],
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
          --font-dystopian: ${dystopian.style.fontFamily};
        }
      `}</style>

      <SessionProvider session={session}>
            <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default api.withTRPC(MyApp)

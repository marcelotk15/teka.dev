import { PropsWithChildren } from 'react'

import { Footer } from './Footer'
import { Texture } from './Texture'
import { Header } from './Header'

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />

      {children}

      <Footer />

      <Texture />
    </>
  )
}

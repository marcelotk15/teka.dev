import { Head, Html, Main, NextScript } from 'next/document'
import useTranslation from 'next-translate/useTranslation'

export default function Document() {
  const { lang } = useTranslation()

  return (
    <Html lang={lang}>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link>
      </Head>

      <body className="min-h-screen bg-background font-sans antialiased">
        <Main />

        <NextScript />
      </body>
    </Html>
  )
}

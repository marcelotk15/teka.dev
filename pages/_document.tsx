import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '../stitches.config';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }}/>

          <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

          <link href="/fonts/fonts.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
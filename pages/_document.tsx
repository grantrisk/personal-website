import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content="personal website, private tutroing, blog, thoughts, projects, experiences, YouTube videos" />
      <meta name="author" content="Grant Risk" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

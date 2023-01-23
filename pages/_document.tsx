import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content="personal website, thoughts, projects, experiences, YouTube videos" />
      <meta name="author" content="Grant Risk" />
      {/* TODO */}
      {/* <meta property="og:title" content="My Personal Website" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yourwebsite.com" />
      <meta property="og:image" content="https://www.yourwebsite.com/images/social-media-image.jpg" />
      <meta property="og:description" content="This is my personal website where I share my thoughts, projects, and YouTube videos." /> */}
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const value = true;
    return (
      <Html lang="pt-br" className="scroll-smooth">
        <Head>
          <header>
            <title>HY homes</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            ></meta>
            <meta name="description" content="Imoveis da HY" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin={value.toString()}
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
            />
          </header>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

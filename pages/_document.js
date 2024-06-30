import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="tr">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/assets/logo.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Promil Hesaplama Testi Online Alkolmetre Ölçer | yüksek doğruluk oranıyla hesaplayın."
          />
          <meta
            name="keywords"
            content="Promil, Hesaplama, Online Alkolmetre, ölçer, alkol testi, Promil hesaplama, Promil, Alkolmetre, Online Alkolmetre Promil hesaplama, alkol tüketimi, promil hesaplayıcı, trafik cezası, promil sınırı"
          />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href="https://yourwebsite.com" />
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

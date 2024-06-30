import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Promil Hesaplama Testi Online Alkolmetre Ölçer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Promil Hesaplama Testi Online Alkolmetre Ölçer | Yüksek Doğruluk Oranıyla Hesaplayın."
        />
        <meta
          name="keywords"
          content="Promil, Hesaplama, Online Alkolmetre, ölçer, alkol testi, Promil hesaplama, Promil, Alkolmetre, Online Alkolmetre Promil hesaplama, alkol tüketimi, promil hesaplayıcı, trafik cezası, promil sınırı, Bira, kaç promil"
        />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

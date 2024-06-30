import Head from "next/head";
import React from "react";
import MainComponent from "../../components/MainComponent";

const PromilPage = () => {
  return (
    <>
      <Head>
        <title>Promil Hesaplama Testi</title>
        <meta
          name="description"
          content="Promil Hesaplama Testi Online Alkolmetre Ölçer | Yüksek Doğruluk Oranıyla Hesaplayın.."
        />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <main>
        <MainComponent />
      </main>
    </>
  );
};

export default PromilPage;

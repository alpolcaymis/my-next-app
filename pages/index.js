import Link from "next/link";
import Head from "next/head";
import MainComponent from "@/components/MainComponent";
const HomePage = () => {
  return (
    <>
      {/* <h1>Hello World</h1> */}
      <Head>
        <title>Promil Hesaplama Testi.</title>
        <meta
          name="description"
          content="This is the homepage of the Promil Hesaplama Testi website."
        />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <MainComponent />
    </>
  );
};

export default HomePage;

import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Welcome to the homepage of domainname.com</p>
      <Link href="/promil">Go to Promil Hesaplama Testi</Link>
    </div>
  );
};

export default HomePage;

import Head from "next/head";
import Hero from "./components/home/hero";
import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>메시 포트폴리오</title>
        <meta name="description" content="리오 메시" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}

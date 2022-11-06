import type { NextPage } from "next";
import Head from "next/head";
import Home from "..";
import { MatchingCards } from "../../components/Page/MatchingCards";

const Restaurant: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MesiCuu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MatchingCards />
      </main>

      <footer></footer>
    </div>
  );
};

export default Restaurant;
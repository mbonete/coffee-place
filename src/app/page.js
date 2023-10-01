import Head from 'next/head';

import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { HomeWrapper } from "./components/HomeWrapper";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>

      <HomeWrapper> 
        <Header />
        <Article />
        <Footer />
      </HomeWrapper>
    </>
  )
}

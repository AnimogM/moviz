import Head from "next/head";
import { Header } from "../components/Header";
import Nav from "../components/Nav";
import { Result } from "../components/Result";
import requests from "../utills/requests";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Moviz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Result results={props.results} />
      <Footer/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const req = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: req.results
    }
  }
}

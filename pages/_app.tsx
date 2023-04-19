import type { AppProps } from "next/app";
import "../public/globals.css";
import "antd/dist/reset.css";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;
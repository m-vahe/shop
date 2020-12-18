import App from "next/app";
import Head from "next/head";
import "../styles/index.scss";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Das Parfum & Beauty</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
export default MyApp;

import App from "next/app";
import Head from "next/head";
import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>App</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
export default MyApp;

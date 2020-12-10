import PageHeader from "../layouts/header/Header";
import Homepage from "../scenes/homepage";
import Footer from "../layouts/footer/Footer";
export default function Home() {
  return (
    <>
      <header>
          <PageHeader />
      </header>
      <Homepage/>
      <footer>
          <Footer/>
      </footer>
    </>
  );
}

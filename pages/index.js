import PageHeader from "../layouts/header/Header";
import MobilePageHeader from "../layouts/mobile-header/MobileHeader";
import Homepage from "../scenes/homepage";
import Footer from "../layouts/footer/Footer";
export default function Home() {
  return (
    <>
        <PageHeader />
        <MobilePageHeader />
        <Homepage/>
        {/* <Footer/> */}
    </>
  );
}

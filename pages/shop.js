import PageHeader from '../layouts/header/Header';
import MobilePageHeader from '../layouts/mobile-header/MobileHeader';
import Footer from '../layouts/footer/Footer';
import ShopScene from '../scenes/shop';
export default function Shop() {
  return (
    <>
      <PageHeader />
      <MobilePageHeader />
      <ShopScene />
      <Footer/>
    </>
  );
}

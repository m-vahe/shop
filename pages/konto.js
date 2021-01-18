import PageHeader from '../layouts/header/Header';
import Footer from '../layouts/footer/Footer';
import KontoScene from '../scenes/konto';
import MobileHeader from '../layouts/mobile-header/MobileHeader';
export default function Konto() {
  return (
    <>
      <PageHeader />
      <MobileHeader />
      <KontoScene />
      <Footer />
    </>
  );
}

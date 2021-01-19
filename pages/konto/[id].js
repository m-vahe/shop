import PageHeader from '../../layouts/header/Header'
import MobileHeader from '../../layouts/mobile-header/MobileHeader'
import KontoScene from '../../scenes/konto/index'
import Footer from '../../layouts/footer/Footer'

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

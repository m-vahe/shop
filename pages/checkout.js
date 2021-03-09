import PageHeader from '../layouts/header/Header'
import MobileHeader from '../layouts/mobile-header/MobileHeader'
import Footer from '../layouts/footer/Footer'
import CheckoutScene from "../scenes/checkout";

export default function Checkout() {
  return (
    <>
      <PageHeader />
      <MobileHeader />
      <CheckoutScene/>
      <Footer />
    </>
  );
}

import PageHeader from "../../layouts/header/Header"
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import CheckoutStepScene from "../../scenes/checkout/checkout-steps-scene/CheckoutStepScene";
export default function CheckoutStep() {
    return (
        <>
            <PageHeader />
            <MobileHeader />
            <CheckoutStepScene/>
            <Footer />
        </>
    );
}

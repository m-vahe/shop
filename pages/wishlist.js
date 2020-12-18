import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import WishListScene from "../scenes/wishlist";

export default function WishList() {
    return (
        <>
            <PageHeader />
               <WishListScene />
            <Footer/>
        </>
    );
}

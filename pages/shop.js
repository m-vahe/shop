import Footer from '../layouts/footer/Footer';
import ShopScene from '../scenes/shop';
const Shop = () => {
  return (
    <>
      <ShopScene />
    </>
  );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Shop

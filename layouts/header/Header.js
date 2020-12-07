import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <>
      <div className="page-header-top-black">
        <span className="col-lg-12">
          Parfum & Beauty deals: Versandkostenfrei ab 25€ inkl. 3 gratisproben
        </span>
      </div>
      <div className="page-header-top-grey">
        <span className="col-lg-12">
          Geniessen Sie 10% Rabatt auf Ihren ersten Einkauf. Mit dem Code
          FIRST2020 beim Checkout auf das gesamte Sortiment.
        </span>
      </div>
      <HeaderSearch />
    </>
  );
};
export default Header;

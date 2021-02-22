import HeaderSearch from "./HeaderSearch";
import Navbar from "./Navbar";
import { getHeaderTexts } from '../../services/actions/homepage__stable';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { headerText1, headerText2 } = useSelector(state => state.navbar);

  useEffect(() => {
    dispatch(getHeaderTexts());
  }, []);
  
  return (
    <>
      <header>
        <div className="page-header-top-black">
          <span className="col-lg-12">
            {headerText1}
          </span>
        </div>
        <div className="page-header-top-grey">
          <span className="col-lg-12">
            {headerText2}
          </span>
        </div>
        <HeaderSearch />
        <Navbar />
      </header>
    </>
  );
};

export default Header;

import { useEffect } from "react";
import PageHeader from "../layouts/header/Header";
import MobilePageHeader from "../layouts/mobile-header/MobileHeader";
import Homepage from "../scenes/homepage";
import Footer from "../layouts/footer/Footer";
import { getUserDataFromLocalStorage } from '../services/actions/auth';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);

  return (
    <>
        {/*<PageHeader />*/}
        {/*<MobilePageHeader />*/}
        <Homepage/>
        {/*<Footer/>*/}
    </>
  );
}

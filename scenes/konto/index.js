import Sidebar from '../../shareable/sidebar/Sidebar';
import KontoContainer from './components/konto-container/KontoContainer';
import Adressen from "./components/adressen/Adressen";
import { useRouter } from "next/router";
import Nutzerdaten from "./components/nutzerdaten/Nutzerdaten";
import Bestellungen from "./components/bestellungen/Bestellungen";
import WhishList from "./components/whishlist/Whishlist";
import NewsLetter from "./components/newsletter/NewsLetter";
import Lesezeichen from "./components/lesezeichen/Lesezeichen";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {getUserDataFromLocalStorage} from "../../services/actions/auth"
import {getKontoMainBoxesData} from "../../services/actions/konto";
const Konto = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
    dispatch(getKontoMainBoxesData())
  }, []);


  const router = useRouter()
  return (
    <>
      <div className='konto'>
        <Sidebar />
        {router.query.id == "main" && <KontoContainer /> }
        {router.query.id == "adressen" && <Adressen/>}
        {router.query.id == "nutzerdaten" && <Nutzerdaten/>}
        {router.query.id == "bestellungen" && <Bestellungen/> }
        {router.query.id == "whishlist" && <WhishList/> }
        {router.query.id == "newsletter" && <NewsLetter/> }
        {router.query.id == "lesezeichen" && <Lesezeichen/> }
      </div>
        {router.query.id == "whishlist" && <NewsletterRep/> }
    </>
  );
};

export default Konto;

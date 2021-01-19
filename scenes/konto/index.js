import Sidebar from '../../shareable//sidebar/Sidebar';
import KontoContainer from './components/konto-container/KontoContainer';
import { useRouter } from "next/router";
const Konto = () => {
  const router = useRouter()
  console.log(router);
  return (
    <>
      <div className='konto'>
        <Sidebar />
        {router.asPath == "/konto/main" ? <KontoContainer/> : router.asPath =="/konto/asd" ? <h1>asd</h1>:router.query.id === "asdf"?<h2>zayhgsuyzGFsuytz</h2>:null}
      </div>
    </>
  );
};

export default Konto;

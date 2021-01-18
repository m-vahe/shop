import Sidebar from '../../shareable//sidebar/Sidebar';
import KontoContainer from './components/konto-container/KontoContainer';
const Konto = () => {
  return (
    <>
      <div className='konto'>
        <Sidebar />
        <KontoContainer />
      </div>
    </>
  );
};

export default Konto;

<<<<<<< HEAD
const MediatekInfo = () => {
  return (
    <section className='mediatek__container'>
      <div className='mediatek__container__option'>
        <span className='mediatek__container__option--text'>reviews</span>
      </div>
      <div className='mediatek__container__option'>
        <span className='mediatek__container__option--text'>interviews</span>
      </div>
      <div className='mediatek__container__option'>
        <span className='mediatek__container__option--text'>tipps</span>
      </div>
      <div className='mediatek__container__option'>
        <span className='mediatek__container__option--text'>features</span>
      </div>
    </section>
=======
import { Col, Row } from 'react-bootstrap';

const MediatekInfo = () => {
  return (
    <Row>
      <Col className='text-center mediatek-options' xs={6} md={3} md={{ offset: 1 }}>
        REVIEWS
      </Col>
      <Col className='text-center mediatek-options' xs={6} md={3} md={{ offset: 1 }}>
        INTEREVIEWS
      </Col>
      <Col className='text-center mediatek-options' xs={6} md={3} md={{ offset: 1 }} >
        TIPPS
      </Col>
      <Col className='text-center mediatek-options' xs={6} md={3} md={{ offset: 1 }}>
        FEATURES
      </Col>
    </Row>
>>>>>>> 04a3525be177e81093e8b739a25dc8befd9ccc60
  );
};

export default MediatekInfo;

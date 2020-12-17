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
  );
};

export default MediatekInfo;

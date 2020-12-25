import { Card } from 'antd';

const MobileCard = ({title,cardData}) => {
  return (
      <Card style={{ width: 300 }} title={title} bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
  );
};

export default MobileCard;

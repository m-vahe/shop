import { Collapse } from 'antd';
import DashboardMenuRadio from './dashboard-menu-panel/DashboardMenuRadio';

const DashboardMenu = ({ onChange, callback, value, data }) => {
  const { Panel } = Collapse;
  return (
    <>
      {data.titles.map((item,i) => (
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition='right'
          ghost='true'
          key={i}
          
        >
          <Panel key='1' header={item.title} >
            <DashboardMenuRadio
              onChange={onChange}
              value={value}
              data={data.category}
              key={i}
            />
          </Panel>
        </Collapse>
      ))}
    </>
  );
};

export default DashboardMenu;

import { Collapse } from 'antd';
import DashboardMenuRadio from './dashboard-menu-panel/DashboardMenuRadio';

const DashboardMenu = ({ onChange, callback, value, data }) => {
  const { Panel } = Collapse;
  return (
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header='KATEGORIEN:' key='1'>
      <DashboardMenuRadio
            onChange={onChange}
            value={value}
            data={data}
          />
      </Panel>
        
          
      
      
    </Collapse>
  );
};

export default DashboardMenu;

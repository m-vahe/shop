import { Collapse, Radio } from 'antd';
import { useState } from 'react';
import DashboardMenu from './dashboard-menu/DashboardMenu';

const Dashboard = () => {
  const [value, setValue] = useState(1);

  const { Panel } = Collapse;

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  function callback(key) {
    console.log(key);
  }
  const data = {
    category: [
      {
        name: 'ALLES',
      },
      {
        name: 'PERFUMS',
      },
      {
        name: 'BEAUTY',
      },
      {
        name: 'HARREN',
      },
      {
        name: 'INTERIERUR',
      },
      {
        name: 'ACCESSOIRES',
      },
    ],
    category1: [
      {
        name: 'ALLES',
      },
      {
        name: 'PERFUMS',
      },
      {
        name: 'BEAUTY',
      },
      {
        name: 'HARREN',
      },
      {
        name: 'INTERIERUR',
      },
      {
        name: 'ACCESSOIRES',
      },
    ],
  };

  return (
    <div>
        <DashboardMenu
          onChange={onChange}
          value={value}
          callback={callback}
          data={data}
        />
    </div>
  );
};

export default Dashboard;

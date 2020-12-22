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
    titles: [
      { title: 'KATEGORIEN:' },
       { title: 'SHOP BY' },
        { title: 'MARKEN' },
        { title: 'WIRKSTOFFE' },
        { title: 'DUFT ANLASS' },
        { title: 'DUFTNOTEN' },
        { title: 'DUFTRICHTUNG' },
        { title: '(SONNENSCHUTZ)' },
      ],
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
    <div className='dashboard__container'>
      {/* {Array.from(Array(7)).map((_, i) => ( */}
        <DashboardMenu
          // key={i}
          onChange={onChange}
          value={value}
          callback={callback}
          data={data}
        />
      {/* ))} */}
    </div>
  );
};

export default Dashboard;

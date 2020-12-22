import React from 'react';
import { Radio } from 'antd';

const DashboardMenuRadio = ({ onChange, value, data }) => {
console.log("file: DashboardMenuRadio.js ~ line 5 ~ DashboardMenuRadio ~ data", data)
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      {data.category.map((item, i) => {
        <Radio value={value} style={radioStyle} key={i}>
          {item.name}
        </Radio>;
      })}
    </Radio.Group>
  );
};

export default DashboardMenuRadio;

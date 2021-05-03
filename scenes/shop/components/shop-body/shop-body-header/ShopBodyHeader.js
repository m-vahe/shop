import { Select } from 'antd';
import React from 'react';
import ShareableSelect from '../../../../../shareable/select/ShareableSelect';
import ShareableShopSelect from "../../../../../shareable/select/ShareableShopSelect";

const ShopBodyHeader = ({onChange}) => {
  const count = 517;
  const { Option } = Select;
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  return (
    <div className='shopBodyHeader__container'>
      <div className='shopBodyHeader__container--count'>{count} TREFFER</div>
      <div className='shopBodyHeader__container__multiple'>
        <Select
          mode='multiple'
          allowClear
          style={{ width: '100%' }}
          placeholder='Please select'
          defaultValue={['a10', 'c12']}
            onChange={onChange}
        >
          {children}
        </Select>
      </div>
      <div className='shopBodyHeader__container__selects'>
        <ShareableShopSelect defaultValue='PRIES'/>
        <ShareableShopSelect defaultValue='NAME'/>
        <ShareableShopSelect defaultValue='NEU'/>
      </div>
    </div>
  );
};

export default ShopBodyHeader;

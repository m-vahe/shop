import { useState } from 'react';
import {
  MenuOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Input, Drawer } from 'antd';
import MobileCard from './MobileCard';
import MobileMenuFooter from './MobileMenuFooter';
import Logo from '../logo/Logo';

const MobileHeader = () => {
  const [visible, setVisible] = useState(false);

  const data = [{}];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 26,
        color: '#7B7B7B',
      }}
    />
  );
  return (
    <>
      <div className='mobileHeader'>
        <div className='mobileHeader__container'>
          <div className='mobileHeader__container__icon--menu'>
            <MenuOutlined onClick={showDrawer} />
          </div>
          <Logo />
          <div className='mobileHeader__container__icon--cart'>
            <ShoppingCartOutlined />
          </div>
        </div>
        <div className='mobileHeader__search__container'>
          <Input
            placeholder='suche'
            className='mobileHeader__search__container--input'
            prefix={prefix}
          />
        </div>
        <Drawer
          title={<Logo />}
          className='mobileHeader__drawer__container'
          placement='left'
          closable={true}
          width={315}
          onClose={onClose}
          visible={visible}
          keyboard={true}
          maskClosable={true}
          onBlur={onClose}
        >
          <MobileCard title='SHOP BY' data={data} />
          <MobileCard title='FRAUEN' data={data} />
          <MobileCard title='HERREN' data={data} />
          <MobileCard title='UNISEX' data={data} />
          <MobileMenuFooter />
        </Drawer>
      </div>
    </>
  );
};

export default MobileHeader;

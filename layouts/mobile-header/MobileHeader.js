import { useState } from 'react';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Drawer,Input } from 'antd';
import MobileCard from './MobileCard';
import MobileMenuFooter from './MobileMenuFooter';
import Logo from '../logo/Logo';
import Image from 'next/image';

const MobileHeader = () => {
  const [visible, setVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const data = [{}];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

const openSerach =()=>{
  setShowSearch(!showSearch)
}

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 26,
        color: '#7b7b7b',
      }}
    />
  );

  return (
      <div className='mobileHeader'>
        <div className='mobileHeader__container'>
          <div className='mobileHeader__container__icon--menu'>
            <MenuOutlined onClick={showDrawer} />
          </div>
          <Logo />
          <div className='mobileHeader__container__image--cart'>
            <SearchOutlined onClick={openSerach} />
            <Image src='/bag.svg' width={30} height={30} />
          </div>
          </div>
          <div className={showSearch ? 'mobileHeader__search__container' : 'hide'}>
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
  );
};

export default MobileHeader;

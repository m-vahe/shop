import { useState } from 'react';
import {
  MenuOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { Input, Drawer } from 'antd';
import MobileCard from './MobileCard';
import MobileMenuFooter from './MobileMenuFooter';

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
          <div className='mobileHeader__container__logo'>
            <Link exact href={'/'}>
              <a href='/'>
                <Image
                  src='/logo.png'
                  alt='Das Parfum'
                  width={308}
                  height={75}
                />
              </a>
            </Link>
          </div>
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
          title='Das Parfum & Beauty'
          className='mobileHeader__drawer__container'
          placement='left'
          closable={true}
          width={'80%'}
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

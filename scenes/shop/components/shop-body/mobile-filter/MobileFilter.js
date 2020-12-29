const MobileFilter = () => {
  return (
    <div>
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
      </Drawer>
    </div>
  );
};

export default MobileFilter;

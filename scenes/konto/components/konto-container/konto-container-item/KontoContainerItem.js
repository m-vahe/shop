const KontoContainerItem = ({item}) => {
  return (
    <div className='kontoContainerItem__content'>
      <p className='kontoContainerItem__content--title'>{item.title}</p>
      <p className='kontoContainerItem__content--desc'>{item.text}</p>
    </div>
  );
};

export default KontoContainerItem;

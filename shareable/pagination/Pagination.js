import { Pagination } from 'antd';

const PagePagination = () => {
  return (
    <div className='pagination'>
      <Pagination simple defaultCurrent={2} total={50} />
    </div>
  );
};

export default PagePagination;

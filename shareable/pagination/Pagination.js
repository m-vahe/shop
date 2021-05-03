import { Pagination } from 'antd';

const PagePagination = ({handleChange,totalSize,current}) => {
  return (
    <div className='pagination'>
      <Pagination simple defaultCurrent={1} current={current} total={totalSize}
                  defaultPageSize={21}
                  onChange={handleChange}/>
    </div>
  );
};

export default PagePagination;

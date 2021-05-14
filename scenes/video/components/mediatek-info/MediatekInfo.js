const MediatekInfo = ({info}) => {
  return (
    <section className='mediatek__container'>
        {[...new Set([...info])].map((e,i)=>{
          return(
              <div className='mediatek__container__option' key={i}>
                <span className='mediatek__container__option--text'>{e}</span>
              </div>
          )
        })}
    </section>
  );
};

export default MediatekInfo;

const MediatekInfo = ({info, setInfo, checked, filter}) => {
    return (
        <section className='mediatek__container'>
            {[...new Set([...info])].map((e, i) => {
                return (
                    <div className='mediatek__container__option' key={i}
                         onClick={() => {
                             if (filter.type === e) {
                                 setInfo(prev => ({
                                     ...prev,
                                     type: e,
                                     checked: !checked
                                 }))
                             } else {
                                 setInfo(prev => ({
                                     ...prev,
                                     type: e,
                                     checked: true
                                 }))
                             }
                         }}
                    >
                        <span className='mediatek__container__option--text'>{e}</span>
                    </div>
                )
            })}
        </section>
    );
};

export default MediatekInfo;

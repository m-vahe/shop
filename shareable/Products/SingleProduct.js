const SingleProduct = () =>{
    return(
        <>
            <div className={"first-prod-items"}>
                <div className={" first-prod-items col-lg-3"} >
                    <div className={"picture-body-prod"}>
                        <img src="/item.png" className={"item-picture"} alt=""/>
                        {/*{e.new && <span className={"item-new"}>New</span>}*/}
                        {/*{*/}
                        {/*    e.approoved && <img src="/15-layers.png" alt="15 layers" className={"circled-txt"}/>*/}
                        {/*}*/}
                    </div>
                    <span className={'prod-txt-head'} >Clean Product</span>

                    <span className={'prod-txt-head2'}>Limited Edition</span>
                    <h3 className={'prod-txt-name'}>Ylumi</h3>
                    <span className={'prod-txt-foot'}>Energy Kapseln</span>
                    <span className={'prod-txt-foot2'}>Kapseln</span>
                    <h3 className={'prod-txt-price'}>28,00 €</h3>
                    <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' className={"letter-svg heart-icon-item"}
                         onClick={()=>addToFavorites(e)}
                         style={{stroke:"#7b7b7b"}}>
                        <path
                            d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'
                            style={{fill:"none",strokeMiterlimit:"10",strokeWidth:"32px"}} /></svg>

                    <button>
                        <p>Quick shop</p>
                        {" "}
                        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 512 512'  style={{fill:"none",strokeMiterlimit:"10",strokeWidth:"32px",width:"22px",height:"22px" ,stroke:"#7b7b7b"}} className={"letter-svg"}>
                            <circle cx='176' cy='416' r='16' />
                            <circle cx='400' cy='416' r='16' />
                            <polyline points='48 80 112 80 160 352 416 352' />
                            <path d='M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128'/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SingleProduct
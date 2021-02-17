import { useRouter } from 'next/router'
const ProductsWithLeftText = (
    {
        products,
        setProducts
    }
    ) =>{
    const router = useRouter()
    const addToFavorites = (e) =>{
        setProducts(products.map(elem => {
            if (elem.id === e.id){
                elem.heart = !elem.heart
            }
            return elem
        }))
        console.log(e)
    }
    const toProductPage = (e) => {
        if(router.pathname !== "/products"){
            router.push(`/products/${e}`)
        }
        else{
            router.push(e)
        }
    }
    const toApproved = () =>{
        router.push("/magazinartikelone")
    }
    return(
        <>
            <div className="first-products-body ">
                <div className="firstprod-left-text">
                    <div className="firstprod-left-text">
                        <p>Beauty: Gesichtspflege</p>
                        <h2>
                            Exklusive
                            Neuheiten
                        </h2>
                        <span>
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate ea fuga illo illum laboriosam minima, odit, quae rerum ut voluptate.
                       </span>
                    </div>
                    <button>JETZT SHOPPEN</button>
                </div>
                <div className={"prod-items-bod"}>
                    {products.map((e,i)=>{
                        return(

                            <div className={" first-prod-items col-lg-3"} key={i} >
                                <div className={"picture-body-prod"} >
                                    <img src={e.imageHead} className={"item-picture"} alt="" onClick={()=>toProductPage(e.id)}/>
                                    
                                    {
                                        e.approoved && <img src="/15-layers.png" alt="15 layers" className={"circled-txt"} onClick={toApproved}/>
                                    }
                                    <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' className={"letter-svg heart-icon-item"}
                                     onClick={()=>addToFavorites(e)}
                                     style={e.heart ? {stroke:"#000000"}:{stroke:"#7b7b7b"}}>
                                    <path
                                        d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'
                                        style={e.heart ? {fill:"#000000",strokeMiterlimit:"10",strokeWidth:"32px"}:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32px"}} />
                                </svg>
                                </div>
                                {e.new ? <span className={'item-new'}>New</span> : <span className={'item-notNew'}>New</span>}
                                <span className={'prod-txt-head'} >{e.productHead}</span>

                                <span className={'prod-txt-head2'}>{e.productHead2}</span>
                                <h3 className={'prod-txt-name'}>{e.productName}</h3>
                                <span className={'prod-txt-foot'}>{e.productTextFoot}</span>
                                <span className={'prod-txt-foot2'}>{e.productTextFoot2}</span>
                                <h3 className={'prod-txt-price'}>{e.price}</h3>
                              

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
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default ProductsWithLeftText
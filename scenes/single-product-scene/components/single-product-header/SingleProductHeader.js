import ShareableSelect from "../../../../shareable/select/ShareableSelect";
import {useState} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
const SingleProductHeader = () =>{
   const onChange=(value)=> {
        console.log('changed', value);
    }
    const [value,setValue] = useState(1)
    const maxLimit = 10
    const onIncHandler = () =>{
        if(value < maxLimit){
            setValue(value + 1)
        }
        console.log(value)
    }
    const onDecHandler = () =>{
        if(value > 1){
            setValue(value - 1)
        }
        console.log(value)
    }
    const onChanges=()=>{

    }
    return(
        <>
           <div className={"single-product-header"}>
               <div className={"left-side"}>
                   <p>Ylumi</p>
                   <h2>Coco Beauty</h2>
                   <a href="#">Kapseln</a>
                   <div className="left-side-select-body">
                        <div className={"left-side-select"}>
                            <span>Inhalt</span>
                            <ShareableSelect defaultValue={"75 ML"} value={"large"}/>
                            
                        </div>
                        <div className={"left-side-select"}>
                            <span>menge</span>
                            <div className={"cart__sidebar__product__body__text--quantityinp"}>
                               
                                <input type="number"  min={"1"} max={"10"} onChange={onChanges} value={value < 10 ? `0${value}` : value }/>
                                <div>
                                    <button className={"btnplus"} onClick={onIncHandler}><FontAwesomeIcon icon={faPlus}/></button>
                                    <button className={"btnminus"} onClick={onDecHandler}><FontAwesomeIcon icon={faMinus}/></button>
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
               <div className={"right-side"}>
                   <div className={"select-number"}>
                      
                       <p>in den warenkorb</p>
                   </div>
                   <div className={"bot-text-right"}>
                       <p>54,00 $</p>
                       <div className={"r-first"}>
                           <span>$ 416,67 / 100ML</span>
                           <span>Versandkostenfrei*</span>
                       </div>
                       <div className={"r-second"}>
                           <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' className={"letter-svg heart-icon-item"}

                                style={{stroke:"#7b7b7b"}}>
                               <path
                                   d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'
                                   style={{fill:"none",strokeMiterlimit:"10",strokeWidth:"32px"}} />
                           </svg>
                           <p>auf meine wunchliste</p>
                       </div>

                   </div>
               </div>
           </div>
        </>
    )
}

export default SingleProductHeader
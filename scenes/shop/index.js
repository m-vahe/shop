import ShopHeader from './components/shop-header/ShopHeader'
import ShopBody from './components/shop-body/ShopBody'
import ShopBodyFooter from "./components/shop-body/shop-body-footer/ShopBodyFooter";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";

const ShopScene = () =>{
  return (
      <>
        <div className={"shop-all-elements"}>
            <ShopHeader/>
            <ShopBody/>
            <ShopBodyFooter/>
            <NewsletterRep/>
        </div>
      </>
  )
}

export default ShopScene

// < div
// className = "container" >
//     < div
// className = "round" >
//     < input
// type = "checkbox"
// id = "checkbox" / >
//     < label
// htmlFor = "checkbox" > < /label>
// </div>
// </div>

//     .round {
//     position: relative;
// }
//
// .round label {
//     background-color: #fff;
//     border: 1px solid #ccc;
//     border-radius: 50%;
//     cursor: pointer;
//     height: 28px;
//     left: 0;
//     position: absolute;
//     top: 0;
//     width: 28px;
// }
//
// .round label:after {
//     content: '';
//     display: inline-block;
//     width: 15px;
//     height: 15px;
//     -moz-border-radius: 7.5px;
//     -webkit-border-radius: 7.5px;
//     border-radius: 7.5px;
//     background-color: transparent;
// }
//
// .round input[type="checkbox"] {
//
//
//     visibility: hidden;
// }
//
// .round input[type="checkbox"]:checked + label {
// }
//
// .round input[type="checkbox"]:checked + label:after {
//     position:absolute;
//     left:4px;
//     top:4px;
//     content: '';
//     display: inline-block;
//     width: 20px;
//     height: 20px;
//     border-radius:50%;
//     background-color: black;
//     opacity: 1;
// }

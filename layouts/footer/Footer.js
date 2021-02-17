import FooterPayment from "./FooterPayment";
import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";
import FooterNavigation from "./FooterNavigation";
import FooterCopyright from "./FooterCopyright";
const Footer = () =>{
    return(
        <>
           <footer>
               <FooterPayment/>
               <FooterNav/>
               <FooterNavigation/>
               <FooterCopyright/>
               <FooterBottom/>
           </footer>
        </>
    )
}

export default Footer
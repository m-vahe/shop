import RegistrationHeader from "./components/registration-header/RegistrationHeader";
import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import RegistrationForm from "./components/registration-form/RegistrationForm";
import RegistrationInfo from "./components/registration-info/RegistrationInfo";
import {useEffect} from "react"
import {useDispatch} from "react-redux";
import {getRegisterCountries} from "../../services/actions/registration";
const RegistrationScene = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getRegisterCountries())
    },[])

    return (
        <>
            <Header/>
            <MobileHeader/>
            <div className={"registration__page__body"}>
                <RegistrationHeader/>
                <div className={"registration__page__body__formandtext"}>
                    <RegistrationForm/>
                    <RegistrationInfo/>
                </div>
            </div>

        </>
    )
}

export default RegistrationScene
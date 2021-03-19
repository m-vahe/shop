import RegistrationHeader from "./components/registration-header/RegistrationHeader";
import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import RegistrationForm from "./components/registration-form/RegistrationForm";
import RegistrationInfo from "./components/registration-info/RegistrationInfo";

const RegistrationScene = () => {
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
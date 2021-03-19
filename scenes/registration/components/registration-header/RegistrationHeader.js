import {useRouter} from "next/router";

const RegistrationHeader = () => {
    const route = useRouter()
    return (
        <div className={"registration__container__header"}>
            <h2 className={"registration__container__header__title"}>Registrieren</h2>
            <div className={"registration__container__header__text"}>
                <p className={"registration__container__header__text--back"} onClick={() => route.back()}>Zuruck</p>
                <div className={"registration__container__header__text--txt"}>
                    <p>
                        Erstellen sie jetzt ihr Das Parfum & Beauty Kundenkonto
                        und geniessen sie diese und weitere Vorteile
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegistrationHeader


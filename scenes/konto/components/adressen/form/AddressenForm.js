import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getRegisterCountries} from "../../../../../services/actions/registration";

const {Option} = Select
const AddressenForm = ({back}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRegisterCountries())
    }, [])
    const [contval, setContval] = useState("Select a country")
    const countriesData = useSelector(state => state.registration.countries)?.Data
    const handleCountryChange = (e) => {
        setContval(e)
    }

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        addresLineOne: "",
        road: '',
        house: "",
        plz: "",
        ort: ""
    })

    const [nameError, setNameError] = useState("")
    const [surnameError, setSurnameError] = useState("")
    const handleValidation = e => {
        let re = /^[A-Za-z]+$/;
        console.log(formData)
        switch (e.target.name) {
            case "name" :
                e.target.value.length > 0 && e.target.value.length <= 16 && re.test(e.target.value) ?
                    (
                        console.log("valid Name"),
                            setFormData(prev => ({
                                ...prev,
                                [e.target?.name]: e.target.value
                            })),
                            setNameError(false))
                    :
                    (
                        console.log("ïnvalid Name"),
                            setFormData(prev => ({
                                ...prev,
                                [e.target?.name]: e.target.value
                            })),
                            setNameError(true)
                    )
                break;
            case "surname" :
                e.target.value.length > 0 && e.target.value.length <= 16 && re.test(e.target.value) ?
                    (
                        console.log("valid Name"),
                            setFormData(prev => ({
                                ...prev,
                                [e.target?.name]: e.target.value
                            })),
                            setSurnameError(false))
                    :
                    (
                        console.log("ïnvalid Name"),
                            setFormData(prev => ({
                                ...prev,
                                [e.target?.name]: e.target.value
                            })),
                            setSurnameError(true)
                    )
                break;
            default:
                break;
        }
    }

    const onSubmitHandler = () => {
        console.log("ähdbshbfhs")
    }


    return (
        <div className={"add__address"}>
            <h2 className={"add__address__title"}>
                adresse ändern
            </h2>
            <p className={"add__address__text"}>
                bitte tragen sie ihre adressdaten ein und klicken sie auf &bdquo; speichern &rdquo;
            </p>
            <form action="#" onSubmit={onSubmitHandler}>
                <div className={`validation-field ${nameError ? "invalidInput" : ""}`}>
                    <input type="text" placeholder={"Vorname*"} name={"name"} onChange={(e) => handleValidation(e)}/>
                    <p style={nameError ? {visibility: "visible"} : {visibility: "hidden"}}>Ungültiger Name</p>
                </div>
                <div className={`validation-field ${surnameError ? "invalidInput" : ""}`}>
                    <input type="text" placeholder={"Nachname"} name={"surname"} onChange={(e) => handleValidation(e)}/>
                    <p style={surnameError ? {visibility: "visible"} : {visibility: "hidden"}}>ungültiger Nachname</p>
                </div>
                <input type="text" placeholder={"Adresszeile 1 (oder Firmenname)"} name={"addressLineOne"}
                       onChange={(e) => handleValidation(e)}/>
                <input type="text" placeholder={"Strasse"} name={"road"} onChange={(e) => handleValidation(e)}/>
                <input type="text" placeholder={"Hausnummer*"} name={"house"} onChange={(e) => handleValidation(e)}/>
                <input type="text" placeholder={"PLZ*"} name={"plz"} onChange={(e) => handleValidation(e)}/>
                <input type="text" placeholder={"Ort*"} name={"ort"} onChange={(e) => handleValidation(e)}/>
                <Select
                    defaultValue={"Select a country"}
                    onChange={handleCountryChange}
                    name="country"
                    style={{height: "5.92rem"}} value={contval}
                >
                    {countriesData?.map((e, i) => {
                        return (
                            <Option value={`${e.name}`} key={i}>{e.name}</Option>
                        )
                    })}
                </Select>
                <input type="submit" value={"Speichern"}/>
            </form>
            <div className={"zuruck_back_body_white"}>
                <button className={"zuruck_back"} onClick={back}>zurück zur übersicht</button>
            </div>
        </div>
    )
}

export default AddressenForm
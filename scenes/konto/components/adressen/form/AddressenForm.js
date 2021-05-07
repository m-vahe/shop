import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";
import {getRegisterCountries} from "../../../../../services/actions/registration";
const {Option} = Select
const AddressenForm = ({back}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRegisterCountries())
    },[])
    const [contval, setContval] = useState("Select a country")
    const countriesData = useSelector(state => state.registration.countries)?.Data
    const handleCountryChange = (e) => {
        setContval(e)
    }

    return (
        <div className={"add__address"}>
            <h2 className={"add__address__title"}>
                adresse ändern
            </h2>
            <p className={"add__address__text"}>
                bitte tragen sie ihre adressdaten ein und klicken sie auf &bdquo; speichern &rdquo;
            </p>
            <form action="#">
                <input type="text" placeholder={"Vorname*"}/>
                <input type="text" placeholder={"Nachname"}/>
                <input type="text" placeholder={"Adresszeile 1 (oder Firmenname)"}/>
                <input type="text" placeholder={"Strasse"}/>
                <input type="text" placeholder={"Hausnummer*"}/>
                <input type="text" placeholder={"PLZ*"}/>
                <input type="text" placeholder={"Ort*"}/>
                <Select defaultValue={"Select a country"} onChange={handleCountryChange} name="country"
                        style={{height: "5.92rem"}} value={contval}>
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
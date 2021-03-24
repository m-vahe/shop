import {Select} from 'antd';
import {useSelector} from "react-redux";
import {useState, useRef, useEffect} from "react"
import {Tooltip} from 'antd';

const {Option} = Select;
const RegistrationForm = () => {
    const countriesData = useSelector(state => state.registration.countries)?.Data

    const [registerData, setRegisterData] = useState({
        name: "",
        surname: "",
        email: "",
        repeatPassword: "",
        password: "",
        country: "",
        day: "",
        month: "",
    })

    const [nameError, setNameError] = useState("")
    const [surNameError, setSurNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [repeatEmailError, setRepeatEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [robot,setRobot] = useState("")
    const [robotTollTip,setRobotToolTip] = useState(false)
    useEffect(()=>{
        if(robot === ""){
            setRobotToolTip(false)
        }else setRobotToolTip(!robot)
    },[robot])
    const handleValidation = (e) => {
        e.persist();
        switch (e.target.name) {
            case "name" :
                e.target.value.length > 0 && e.target.value.length <= 16 ?
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setNameError(false))
                    :
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setNameError(true)
                    )
                break;
            case "surname" :
                e.target.value.length > 0 && e.target.value.length <= 16 ?
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setSurNameError(false))

                    :
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setSurNameError(true)
                    )
                break;
            case "email" :
                e.target.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                    ?
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setEmailError(false)
                    )
                    :
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setEmailError(true)
                    )
                break;
            case "repeatEmail" :
                e.target.value === registerData.password ?
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            repeatPassword: e.target.value
                        })),
                            setRepeatEmailError(false)
                    )
                    :
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            repeatPassword: e.target.value
                        })),
                            setRepeatEmailError(true)
                    )
                break;
            case "password" :
                e.target.value.length >= 8 ?
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setPasswordError(false)
                    )
                    :
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setPasswordError(true)
                    )
                break;
            default :
                break
        }
    }

    const handleCountryChange = (e) => {
        setRegisterData(prev => ({
            ...prev,
            country: e
        }));
    }

    const handleDayChange = (e) => {
        setRegisterData(prev => ({
            ...prev,
            day: e
        }));
    }

    const handleMonthChange = (e) => {
        setRegisterData(prev => ({
            ...prev,
            month: e
        }));
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if ((!emailError && !repeatEmailError && !passwordError && !nameError && !surNameError && emailError !== "") &&
            repeatEmailError !== "" && passwordError !== "" && nameError !== "" && surNameError !== "" && emailError !== ""
        && robot) {
            alert(JSON.stringify(registerData))
            setRegisterData({
                name: "",
                surname: "",
                email: "",
                repeatPassword: "",
                password: "",
                country: "",
                day: "",
                month: "",
            })
            setRobot("")
            setRepeatEmailError("")
            setPasswordError("")
            setEmailError("")
            setSurNameError("")
            setNameError("")
        } else {
            scroll.current.scrollIntoView()
            if (nameError === "") {
                setNameError(true)
            }
            if (emailError === "") {
                setEmailError(true)
            }
            if (surNameError === "") {
                setSurNameError(true)
            }
            if (passwordError === "") {
                setPasswordError(true)
            }
            if (repeatEmailError === "") {
                setRepeatEmailError(true)
            }
            if(robot === ""){
                setRobot(false)
            }
        }
    }

    const scroll = useRef()
    return (
        <div className={"registration__form__container"}>
            <h2 className={"registration__form__container--title"} ref={scroll}>Deine Daten zur Registrierung </h2>
            <form action="" className={"registration__form__container__form"} onSubmit={onSubmit}>
                <Tooltip title={"Name is required"} color={"red"} visible={nameError} placement="bottomRight">
                    <input name={"name"} type="text" placeholder={"Vorname*"} value={registerData.name}
                           className={nameError && "input-error"}
                           maxLength={16}
                           onChange={handleValidation}
                    />
                </Tooltip>
                <Tooltip title={"Surname is required"} color={"red"} visible={surNameError} placement="bottomRight">
                    <input name={"surname"} type="text" placeholder={"Nachname*"}
                           className={surNameError && "input-error"}
                           maxLength={16}
                           value={registerData.surname}
                           onChange={handleValidation}
                    />
                </Tooltip>
                <Tooltip title={"Please enter email"} color={"red"} visible={emailError} placement="bottomRight">
                    <input name={"email"} type="email" placeholder={"E-Mail-Adresse*"}
                           className={emailError && "input-error"}
                           value={registerData.email}
                           onChange={handleValidation}/>
                </Tooltip>
                <Tooltip title={"Please enter password"} color={"red"} visible={passwordError} placement="bottomRight">
                    <input name={"password"} type="password" placeholder={"Passwort*"} value={registerData.password}
                           className={passwordError && "input-error"}
                           onChange={handleValidation}/>
                </Tooltip>
                <Tooltip title={"Please repeat password"} color={"red"} visible={repeatEmailError} placement="bottomRight">
                    <input name={"repeatEmail"} type="password" value={registerData.repeatPassword}
                           className={repeatEmailError && "input-error"}
                           placeholder={"Passwort bestätigen*"}
                           onChange={handleValidation}/>
                </Tooltip>
                <Select defaultValue={"Select a country"} onChange={handleCountryChange} name="country"
                        style={{height: "5.92rem"}}>
                    {countriesData?.map((e, i) => {
                        return (
                            <Option value={`${e.name}`} key={i}>{e.name}</Option>
                        )
                    })}
                </Select>
                <div className={"registration__form__container__form--birth"}>
                    <Select defaultValue="Geburtstag" onChange={handleDayChange} style={{height: "5.92rem"}}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option>Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Select defaultValue="Geburtsmonat" onChange={handleMonthChange} style={{height: "5.92rem"}}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option>Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Select defaultValue="Geburtsjahr" onChange={handleDayChange} style={{height: "5.92rem"}}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option>Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
                <div className={"registration__form__container__form__newsletter"}>
                    <p>
                        Möchten Sie Neuigkeiten und exklusive Angebote von Das Parfum & Beauty per E-Mail erhalten?
                    </p>
                    <div className={"registration__form__container__form__newsletter__item"}>
                        <div className={"registration__form__container__form__newsletter__item__body"}>
                            <input
                                id={"yes"}
                                type='radio'
                                name={"gender"}
                                value={"male"}
                                className='newsLetter__container__action__form--gender'
                            />
                            <label htmlFor="yes">Ja, bitte!</label>
                        </div>
                        <div className={"registration__form__container__form__newsletter__item__body"}>
                            <input
                                id={"no"}
                                type='radio'
                                name={"gender"}
                                value={"male"}
                                className='newsLetter__container__action__form--gender'
                            />
                            <label htmlFor="no">Nein, danke.</label>
                        </div>
                    </div>
                    <p>
                        Mehr zu unseren <span>E-Mails</span> und <span>Datenschutzbestimmungen.</span>
                    </p>
                </div>
                    <Tooltip title={"Select if you are not a robot"} color={"red"} visible={robotTollTip} placement="bottomRight">
                        <div className={`registration__form__container__form__robot ${robotTollTip && "bordered-robot"}`} >
                            <input
                                id={"yes"}
                                type='checkbox'
                                name={"gender"}
                                value={"male"}
                                checked={robot === "" ? false : robot}
                                className='newsLetter__container__action__form--gender'
                                onChange={(e)=>{
                                    setRobot(e.target.checked)
                                }}
                            />
                            <label htmlFor="yes">Ich bin kein Roboter</label>
                        </div>
                    </Tooltip>
                <input type="submit" value={"Anmalden"} className={"registration__form__container__form__submit"}/>
                <p className={"registration__form__container__form__bottxt"}>Mit Ihrer Registrierung stimmen Sie
                    den <span>Nutzungsbedingungen</span> von Das Parfum & Beauty zu.</p>
            </form>
        </div>
    )
}

export default RegistrationForm
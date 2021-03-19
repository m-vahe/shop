import {Select} from 'antd';

const {Option} = Select;
const RegistrationForm = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    return (
        <div className={"registration__form__container"}>
            <h2 className={"registration__form__container--title"}>Deine Daten zur Registrierung </h2>
            <form action="" className={"registration__form__container__form"}>
                <input type="text" placeholder={"Vorname*"}/>
                <input type="text" placeholder={"Nachname*"}/>
                <input type="email" placeholder={"E-Mail-Adresse*"}/>
                <input type="email" placeholder={"E-Mail-Adresse bestätigen*"}/>
                <input type="current-password" placeholder={"Passwort*"}/>
                <Select defaultValue="lucy" onChange={handleChange} style={{height:"5.92rem"}}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <div className={"registration__form__container__form--birth"}>
                    <Select defaultValue="lucy" onChange={handleChange} style={{height:"5.92rem"}}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option>Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Select defaultValue="lucy" onChange={handleChange} style={{height:"5.92rem"}}>
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
                                checked={false}
                                // checked={checked}
                                className='newsLetter__container__action__form--gender'
                                // onChange={(e)=> {
                                //     const val = e.target.value;
                                //     setChecked(!checked)
                                //     setChecked2(false)
                                //     setChecked3(false)
                                //     e.target.checked &&
                                //     setNewsLetter((prev)=>({
                                //         ...prev,
                                //         Gender:val
                                //     }))
                                // }}
                            />
                            <label htmlFor="yes">Ja, bitte!</label>
                        </div>
                        <div className={"registration__form__container__form__newsletter__item__body"}>
                            <input
                                id={"no"}
                                type='radio'
                                name={"gender"}
                                value={"male"}
                                checked={false}
                                // checked={checked}
                                className='newsLetter__container__action__form--gender'
                                // onChange={(e)=> {
                                //     const val = e.target.value;
                                //     setChecked(!checked)
                                //     setChecked2(false)
                                //     setChecked3(false)
                                //     e.target.checked &&
                                //     setNewsLetter((prev)=>({
                                //         ...prev,
                                //         Gender:val
                                //     }))
                                // }}
                            />
                            <label htmlFor="no">Nein, danke.</label>
                        </div>
                    </div>
                    <p>
                        Mehr zu unseren <span>E-Mails</span> und <span>Datenschutzbestimmungen.</span>
                    </p>
                </div>
                <div className={"registration__form__container__form__robot"}>
                    <input
                        id={"yes"}
                        type='radio'
                        name={"gender"}
                        value={"male"}
                        // checked={checked}
                        className='newsLetter__container__action__form--gender'
                        // onChange={(e)=> {
                        //     const val = e.target.value;
                        //     setChecked(!checked)
                        //     setChecked2(false)
                        //     setChecked3(false)
                        //     e.target.checked &&
                        //     setNewsLetter((prev)=>({
                        //         ...prev,
                        //         Gender:val
                        //     }))
                        // }}
                    />
                    <label htmlFor="yes">Ich bin kein Roboter</label>
                </div>
                <input type="submit" value={"Anmalden"} className={"registration__form__container__form__submit"}/>
                <p className={"registration__form__container__form__bottxt"}>Mit Ihrer Registrierung stimmen Sie den <span>Nutzungsbedingungen</span> von Das Parfum & Beauty zu.</p>
            </form>
        </div>
    )
}

export default RegistrationForm
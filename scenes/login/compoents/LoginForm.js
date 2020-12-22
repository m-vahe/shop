import Link from 'next/link'
import Image from "next/image";
const LoginForm = () =>{
    return(
        <>
            <div className={"login-scene d-flex"}>
                <div className={"login-scene-head"}>
                    <h2>Anmelden</h2>
                    <Link  href={"/"}>
                        <a className={"hovered-top-link"} href={"/"}>Zurück</a>
                    </Link>
                </div>
                <div className={"login-scene-form-and-else d-flex flex-wrap"}>
                    <div className={"left-of-login-form col-lg-5 d-flex"}>
                        <div className={"left-login-form-one"}>
                            <h2>Kunden Log-in</h2>
                            <form action="#">
                                <input type="email" placeholder={"E-Mail-Adresse"}/>
                                <input type="password" placeholder={"Passwort"}/>
                                <div className={"forgot-pass-and-submit"}>
                                    <button type="submit">
                                        Anmelden
                                    </button>
                                    <Link href={"/forgotpassword"}>
                                        <a href="/forgotpassword">
                                            Passwort vergessen
                                        </a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className={"left-login-form-three"}>
                            <button>Facebook</button>
                            <button>Google</button>
                        </div>
                    </div>
                    <div className={"col-lg-5 login-right-form"}>
                       <div className={"login-right-one"}>
                           <h2>Noch kein Konto? Registrieren</h2>
                           <button>Konto erstellen</button>
                       </div>
                        <p className={"login-right-mid-txt"}>ODER</p>
                        <div className={"login-right-two"}>
                            <button>Gast</button>
                            <Link href={"/order"}>
                                <a href="/order">
                                    Direkt per Paypal oder amazon pay bezahlen
                                </a>
                            </Link>
                        </div>
                        <div className={"login-right-three d-flex flex-wrap"}>
                            <img src="./amazonlogin.png" alt="amazon" className={"col-lg-6"}/>
                            <img src="./paypallogin.png" alt="paypal" className={"col-lg-6"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm
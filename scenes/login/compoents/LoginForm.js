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
                <div className={"login-scene-form-and-else d-flex"}>
                    <div>
                        <h2>Kunden Log-in</h2>
                        <form action="#">
                            <input type="email"/>
                            <input type="password"/>
                            <input type="submit" value={"Anmelden"}/>
                        </form>
                        <Link href={"/forgotpassword"}>
                            <a href="/forgotpassword">
                                Passwort vergessen
                            </a>
                        </Link>
                        <div>
                            <p>fezbu</p>
                            <p>gulugulu</p>
                        </div>
                    </div>
                    <div>
                       <div>
                           <h2>Noch kein Konto? Registrieren</h2>
                           <button>Konto erstellen</button>
                       </div>
                        <p>ODER</p>
                        <button>Gast</button>
                        <div>
                            <p>
                                Direkt per Paypal oder amazon pay bezahlen
                            </p>
                            <div>
                                <img src="./amazonlogin.png" alt="amazon"/>
                                <img src="./paypallogin.png" alt="paypal"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm
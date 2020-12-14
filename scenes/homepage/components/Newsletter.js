const Newsletter = () =>{
    return(
        <>
            <div className={"newsletter_all d-flex"}>
                <h2>Newsletter</h2>
                <p>
                    Abonnieren sie unseren newsletter
                    und erhalten sie exklusive neuigkeiten zu unseren
                    neuen artikeln und werbeaktionen!
                </p>
                <div className={"newsletter_email"}>
                    <form action="#" className={"d-flex"}>
                        <input type="email" placeholder={"Email adresse"} className={"newsletter-email-inp col-lg-8"}/>
                        <input type="submit" className={"newsletter-email-sub col-lg-4" }/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Newsletter
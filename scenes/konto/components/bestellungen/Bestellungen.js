import KontoTable from "../../../../shareable/konto/KontoTable";

const Bestellungen = () =>{
    const titles = ["Datum","Bestellnummer","Status","Betrag","Details"]
    const year = "2020"
    const data = [
        {date:"01.12. 2020",code:"YJZGVEF",status:"Zustellung erfolgt",price:"28,00 €"},
        {date:"01.12. 2020",code:"YJZGVEF",status:"Zustellung erfolgt",price:"282,00 €"},
        {date:"01.12. 2020",code:"YJZGVEF",status:"Zustellung erfolgt",price:"428,00 €"},
    ]
    return(
        <div className={"bestellungen__container"}>
            <h2 className={"bestellungen__container--title"}>Deine Bestellungen</h2>
            <div className={"tbl"}>
                <KontoTable titles={titles} year={year} data={data}/>
            </div>
        </div>
    )
}

export default Bestellungen
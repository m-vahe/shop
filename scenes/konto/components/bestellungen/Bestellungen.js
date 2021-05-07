import KontoTable from "../../../../shareable/konto/KontoTable";
import {useRouter} from "next/router";

const Bestellungen = () =>{
    const titles = ["Datum","Bestellnummer","Status","Betrag","Details"]
    const year = "2020"
    const data = [
        {date:"01.12. 2020",code:"YJZGVEF",status:"Zustellung erfolgt",price:"28,00 €"},
        {date:"01.12. 2020",code:"YJZGVEF",status:"Zustellung erfolgt",price:"282,00 €"},
        {date:"01.12. 2020",code:"YJZGVEF",status:"Zustellung erfolgt",price:"428,00 €"},
    ]
    const router = useRouter()
    return(
        <div className={"bestellungen__container"}>
            <p className={"page_name"}>Bestellungen</p>
            <h2 className={"bestellungen__container--title"}>Deine Bestellungen</h2>
            <div className={"tbl"}>
                <KontoTable titles={titles} year={year} data={data}/>
            </div>
            <div className={"zuruck_back_body"}>
                <button className={"zuruck_back"} onClick={()=>router.push("/konto/main")}>zurück zur übersicht</button>
            </div>
        </div>
    )
}

export default Bestellungen
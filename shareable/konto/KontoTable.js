const KontoTable = ({titles,year,data}) =>{
    return(
        <table className={"bestellungen__container__table"}>
            <thead className={"bestellungen__container__table--header"}>
                <tr>
                    {
                        titles.map((e,i)=>{
                            return(
                                <th key={i}>{e}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody className={"bestellungen__container__table__body"}>
                <tr className={"bestellungen__container__table__body--year"}>
                    <th>
                        {year}
                    </th>
                </tr>
            {data.map((e,i)=>{
                return(
                    <tr key={i} className={"bestellungen__container__table__body__elems"}>
                        <td>
                            {e.date}
                        </td>
                        <td>
                            {e.code}
                        </td>
                        <td>
                            {e.status}
                        </td>
                        <td>
                            {e.price}
                        </td>
                        <td>
                            <a href="#">Details ansehen</a>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default KontoTable
import { useEffect, useState } from "react"
import StockService from "../services/StockService.jsx"

const Display = (props) => {

    const [stocks, setStocks] = useState([])

    function dateChanger(dateISO) {
        const dateObject = new Date(dateISO)
        const newDate = `${(dateObject.getMonth() + 1).toString().padStart(2, '0')}/${dateObject.getDate().toString().padStart(2, '0')}/${dateObject.getFullYear()}`

        return newDate
    }
    useEffect(() => {
        StockService.getAllStocks()
            .then((res) => {
                console.log(res);
                setStocks(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return(
        <div>
            <h1>All Trades</h1>
            <div className="displayContainer">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Ticker</th>
                        <th>Buy/Sell</th>
                        <th>Price</th>
                        <th>Shares</th>
                        <th>Shaper</th>
                        <th>Tactical</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stocks.map((stock, index) => (
                            <tr key={index}>
                                {/* <td><Link className="contLink" to={`/books/${book._id}/details`}>{book.bookTitle}</Link></td>
                                 */}
                                <td>{dateChanger(stock.date)}</td>
                                <td>{stock.ticker}</td>
                                <td>{stock.buySell}</td>
                                <td>{stock.price}</td>
                                <td>{stock.shares}</td>
                                <td>{stock.shaper}</td>
                                <td>{stock.tactical}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Display
import { useState, useEffect } from "react";
import Display from "./Display";
import TradeForm from "./TradeForm";
import StockService from "../services/StockService.jsx";

const Home = (props) => {
    const [currentStocks, setCurrentStocks] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        StockService.getAllStocks()
            .then((res) => {
                console.log(res);
                setCurrentStocks(res);
                setLoaded(true)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [loaded])

    return(
        <div>
            {loaded && <Display stocks={currentStocks} setStocks={setCurrentStocks} />}
            <TradeForm loaded={loaded} setLoaded={setLoaded} />
        </div>
    )
}

export default Home
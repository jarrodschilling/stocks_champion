import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StockService from "../services/StockService";


const TradeForm = (props) => {

    const [stockState, setStockState] = useState({
        ticker: "",
        price: 0,
        date: 0,
        shares: 0,
        buySell: "",
        shaper: "",
        tactical: ""
    })

    const [errors, setErrors] = useState([])
    const [formErrors, setFormErrors] = useState({
        ticker: "Ticker symbol required",
        price: "Price required",
        date: "Proper date required",
        shares: "Number of shares required",
        buySell: "Trade type required",
        shaper: "",
        tactical: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        if (e.target.name === "ticker") {
            let newValue = e.target.value
            setStockState((prevState) => ({
                ...prevState,
                [e.target.name]: newValue
            }))
            let errorMsg = ''
            if (newValue) {
                if (newValue.length < 1) {
                    errorMsg = "Ticker must have at least one character"
                } else if (newValue.length > 5) {
                    errorMsg = "Ticker cannot be more than five characters long"
                }
            } else {
                errorMsg = "Ticker symbol required"
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        StockService.addOneStock(stockState)
            .then(res => {
            console.log(res)
            navigate("/")
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    const validateForm = () => {
        return Object.values(formErrors).every(value => value === '')
    }


    return(
        <div>
            <h1>Add a Trade</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="ticker">Ticker</label>
                <input type="text" name="ticker" id="ticker" value={stockState.ticker} onChange={handleChange} />
                {formErrors.ticker && <p>{formErrors.ticker}</p>}
                {errors.ticker && <p>{errors.ticker.message}</p>}

                <label htmlFor="price">Price</label>
                <input type="text" name="price" id="price" value={stockState.price} onChange={handleChange} />
                {formErrors.price && <p>{formErrors.price}</p>}
                {errors.price && <p>{errors.price.message}</p>}

                <label htmlFor="shares">Shares</label>
                <input type="text" name="shares" id="shares" value={stockState.shares} onChange={handleChange} />
                {formErrors.shares && <p>{formErrors.shares}</p>}
                {errors.shares && <p>{errors.shares.message}</p>}

                <label htmlFor="date">Date</label>
                <input type="text" name="date" id="date" value={stockState.date} onChange={handleChange} />
                {formErrors.date && <p>{formErrors.date}</p>}
                {errors.date && <p>{errors.date.message}</p>}

                <label htmlFor="buySell">Buy or Sell</label>
                <input type="text" name="buySell" id="buySell" value={stockState.buySell} onChange={handleChange} />
                {formErrors.buySell && <p>{formErrors.buySell}</p>}
                {errors.buySell && <p>{errors.buySell.message}</p>}

                <label htmlFor="shaper">Shaper Pattern</label>
                <input type="text" name="shaper" id="shaper" value={stockState.shaper} onChange={handleChange} />
                {formErrors.shaper && <p>{formErrors.shaper}</p>}
                {errors.shaper && <p>{errors.shaper.message}</p>}

                <label htmlFor="tactical">Tactical Pattern</label>
                <input type="text" name="tactical" id="tactical" value={stockState.tactical} onChange={handleChange} />
                {formErrors.tactical && <p>{formErrors.tactical}</p>}
                {errors.tactical && <p>{errors.tactical.message}</p>}

                <button className="addStock" type="submit" disabled={!validateForm()}>Confirm Trade</button>
            </form>
        </div>
    )
}

export default TradeForm
import {model, Schema} from 'mongoose';
const StockSchema = new Schema(
    {
        ticker: {
            type: String,
            required: [true, "Stock ticker required"],
            minlength: [1, "Stock ticker required"],
            maxlength: [5, "Stock ticker cannot be more than 5 letters"]
        },
        price: {
            type: Number,
            required: [true, "Stock price required"],
            min: [10, "Don't trade stocks under $10!"],
            max: [5000, "What stock trades above $5,000?"]
        },
        // date: {
        //     type: Date,
        //     required: [true, "Date of buy/sell required"]
        // },
        shares: {
            type: Number,
            required: [true, "Number of shares required"],
            min: [1, "Must be at least 1 share"],
            max: [100000, "Are you really buying more than 100,000 shares?"]
        },
        buySell: {
            type: String,
            enum: ["buy", "sell"]
        },
        shaper: {
            type: String,
            minlength: [2, "Shaper pattern must be at least 2 characters long"],
            maxlength: [100, "Shaper pattern can't be more than 100 characters long"]
        },
        tactical: {
            type: String,
            minlength: [2, "Tactical pattern must be at least 2 characters long"],
            maxlength: [100, "Tactical pattern can't be more than 100 characters long"]
        }
    }
)
const Stock = model("Stock", StockSchema)
export default Stock
import Stock from "../models/stock.model.js";

async function createStock(req, res, next) {
    try {
        const newStock = await Stock.create(req.body);
        const book = await newStock.save();
        res.json(newStock);
    } catch (error) {
        console.log(error);
        next(error);
        res.status(400).json(error);
    }
}

async function getAllStocks(req, res, next) {
    try {
        const allStocks = await Stock.find();
        res.json(allStocks);
    } catch (error) {
        console.log(error);
        next(error);
        res.status(400).json(error);
    }
}

async function getOneStock(req, res, next) {
    try {
        const foundStock = await Stock.findById(req.params.id);
        res.json(foundStock);
    } catch(error) {
        console.log(error);
        next(error);
        res.status(400).json(error);
    }
}

async function updateOneStock(req, res, next) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedStock = await Stock.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedStock)
    } catch(error) {
        console.log(error);
        next(error);
        res.status(400).json(error);
    }
}

async function deleteOneStock(req, res, next) {
    try {
        const deletedStock = await Stock.findByIdAndDelete(req.params.id);
        res.json(deletedStock);
    } catch(error) {
        console.log(error);
        next(error);
        res.status(400).json(error);
    }
}

const StockController = {
    createStock: createStock,
    getAllStocks: getAllStocks,
    getOneStock: getOneStock,
    updateOneStock: updateOneStock,
    deleteOneStock: deleteOneStock
}

export default StockController
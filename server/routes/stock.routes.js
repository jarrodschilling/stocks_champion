import { Router } from 'express';
import StockController from "../controllers/stock.controller.js";
const router = Router();

router.route('/stocks/add')
    .post(StockController.createStock)

router.route('/stocks')
    .get(StockController.getAllStocks)

router.route('/stocks/:id')
    .get(StockController.getOneStock)
    .put(StockController.updateOneStock)
    .delete(StockController.deleteOneStock)

export default router;
import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
})

function getAllStocks() {
    return http.get('/stocks')
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}

function getOneStock(id) {
    return http.get(`/stocks/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}

function updateOneStock(id, stockState) {
    return http.put(`/stocks/${id}`, stockState)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}

function addOneStock(stock) {
    return http.post('/stocks/add', stock)
        .then(res => res.data)
        .catch(err => {
            throw err; 
        })
}

function deleteOneStock(id) {
    return http.delete(`/stocks/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}

const StockService = {
    getAllStocks: getAllStocks,
    updateOneStock: updateOneStock,
    addOneStock: addOneStock,
    getOneStock: getOneStock,
    deleteOneStock: deleteOneStock
}

export default StockService
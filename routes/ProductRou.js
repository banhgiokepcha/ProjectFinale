var express = require('express')
var router = express.Router()
var ProductCtrl = require('../controllers/ProductCtrl')

router.get('/search', ProductCtrl.SearchProduct)
router.get('/product/:id', ProductCtrl.ProductDetail) 
router.get('/product/:id/update', ProductCtrl.GetProductToUpdate)
router.post('/product/:id/update', ProductCtrl.UpdateProduct)
router.get('/product/create', ProductCtrl.AddNewProduct)
router.post('/product/create', ProductCtrl.AddNewProduct)

module.exports = router;
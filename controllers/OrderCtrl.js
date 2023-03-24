var Order = require('../models/Order')
var router = require('express').Router() 

class OrderCtrl {
    async GetUserOrder(req, res) {
        try {           
            const data = await Order.find({user_id:req.params.id}) 
            res.render('user-Order', {
                order: data,
            })   
        } catch {
       
        }
    } 

    async CreateOrder(req, res) {
        const newOrder = new Order(req.body)
    }
}



module.exports = new OrderCtrl;
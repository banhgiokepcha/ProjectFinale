const User = require('../models/User') 
const Product = require('../models/Product')



class HomeCtrl {
    async PageIndex(req, res) {
        /*var data = await Product.find().limit(20) */
       try {
        var products = await Product.find()
        res.render('index', {
            layout: 'layout',
            product_list : products,
        }) 
       } catch {
        res.status(500).json({error: "Cannot save product"})

       }
       
        
    }

    async Login(req, res) {
        var data = await User.Login(req.body.username, req.body.password)
       
    } 

    async Register(req, res) {
        var newUser = new User({
            email: req.body.email,
            name: req.body.name,
            mobile: req.body.numer,
            password: req.body.password })

        try {
            var data = await User.save(newUser) 
            res.send(true)
        } catch (error) {
            res.send(false)
        }
    } 

   
} 

module.exports = new HomeCtrl;
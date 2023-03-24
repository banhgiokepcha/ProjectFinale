var Product = require('../models/Product')
var cloudinary = require('cloudinary') 
var multer = require('../config/multer')

class ProductCtrl {
    async ProductDetail(req, res) {
        try { 
            var product = await Product.findById(req.params.id) 
            if (product) res.status(404).json({error: "Item not found"}) 
            else res.render('', {
                product: product
            })
        } catch (error) {
            res.status(400).json({error})
        }

    }  

    async AddNewProduct(req, res) {
        try {
            const result = await cloudinary.v2.uploader.upload(req.file.path) 
            const newProduct = new Product({
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                brand: req.body.brand,
                price: req.body.price,
                imgURL: result.secure_url 
            })
            const data = Product.find({name: req.body.name})
            if (!data) {
                newProduct.save()
                req.flash('New product added')
            } else {
                req.flash('Product already')
            }
            

        } catch (error) { 
            console.log(error) 
            res.send(false)
         }
    }

    async GetProductToUpdate(req, res) {
        try {
            const product = await Product.findOne({name: req.body.name})
            if (!product) {
                res.status(404).json({error: "Product not found"})
            } else {
                res.render('product-edit', {
                    product: product,
                })
            }
            res.send(true) 
        } catch(error) {
            res.send(false)
        }
    } 

    async UpdateProduct(req, res) {
        const result = await cloudinary.v2.uploader.upload(req.file.path) 
        const newProduct = new Product({
            product_id: req.params.id,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            brand: req.body.brand,
            price: req.body.price,
            imgURL: result.secure_url 
        }) 

        try {
            const save = Product.findByIdAndUpdate(req.params.id, newProduct) 
            req.flash("Product added successfully")
            req.redirect('/product/:id' )
        } catch(error) {
            res.status(400).json({error: "Cannot update product"})
        }

    } 

    async SearchProduct(req, res) {
        res.render('search')
    }


} 



module.exports = new ProductCtrl;
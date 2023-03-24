var Product = require('./routes/ProductRou.js')
var Home = require('./routes/HomeCtrl')
var User = require('./routes/UserRou')

function route(app) {
    app.use('/', Home) 
    app.use('/product', Product)
    app.use('/search', Product)
    
    
} 


module.exports = route;
const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const orderSchema = new Schema({
    user_id: {
        type: String,
        ref: 'user'
    },

    order_id: {
        type: String,
        required: true,
    }, 

    product: [{
        product_id: {
            type: String,
            ref: "Product"
        },

        name: {
            type: String,
            required: true
        },

        quantity: {
            type: Number,
            required: true,
        }
    }], 

    status: {
        type: String,
        enum: ['On hold', 'Ongoing', 'Cancelled', 'Completed']
    }, 

    total: {
        type: Number,
        required: true,
    }


});

module.exports = mongoose.model('Order', orderSchema)
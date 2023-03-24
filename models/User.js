const mongoose = require('mongoose') 

const Schema = mongoose.Schema; 

const userSchema =  new Schema({
    
    isAdmin: {
        type: Boolean,
        default: false,
      },
    user: [
        {
          userId: {
            type: Schema.Types.ObjectId,
            required: true,
          }, 
          email: {
            type: String,
            required: true,
          },
          name: String,
          mobileno: Number,
          password:  { 
            type:String,
            min: 8,
            max: 12, 
        }

        }
    ],
   
    
    purchaseHistory: [
        {
            order_id: {
                type: Schema.Types.ObjectId,
                required: true,
            },

            quantity: {
                type: Number,
                required: true,
            },
            products: [
                {
                    product_id: {type: mongoose.Schema.ObjectId,ref: 'Product'} ,
                    name: {type: String, required: true}, 
                    quantity: {type: Number, required: true}
                }
            ]
        }
    ]
}); 

module.exports = mongoose.model('User', userSchema)



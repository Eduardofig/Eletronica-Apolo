const mongoose = require('../database');
const product = require('./product');

// Model do produto
const CartSchema = new mongoose.Schema({

    carrinho:{
        type: [product],
        default: undefined
    }

})

const Cart = mongoose.model("Cart",CartSchema)
module.exports = Cart;
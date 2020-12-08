const mongoose = require('../database');
const product = require('./product');

const ProductSchema = require('mongoose').model("Product").schema;

// Model do produto
const CartSchema = new mongoose.Schema({

    carrinho:{
        type: [ProductSchema],
        default: undefined
    },

    id:{
        type: String,
        required: true,
        unique: true
    }

})

const Cart = mongoose.model("Cart",CartSchema)
module.exports = Cart;
const mongoose = require('../database')

const ProductSchema = new mongoose.Schema({

    nome:{
        type: String,
        required:true,
        unique:true,
    },
    
    quantidade:{
        type: Number,
        required:true,
    },

    preco:{
        type: Number,
        required:true,
    },

    codigo:{
        type: Number,
        required:true,
        unique:true,
    },
    
    descricao:{
        type: String,
        required:true,
    },

})

const Product = mongoose.model("Product",ProductSchema)
module.exports = Product;
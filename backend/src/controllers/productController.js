const Product = require('../models/product');

const controller = {

    get(req,res,next){
        res.send("Página de produtos");
    },

    post(req,res,next){
        Product.create(req.body).then(product =>
            res.send(product)).catch(next);
    },

    put(req,res,next){
        Product.findByIdAndUpdate(req.params.id, req.body,{new: true}).
            then(function(){
        Product.findOne({_id: req.params.id}).
            then(product =>res.send(product),
            console.log("Product updated"));
            }).catch(next);
    },

    delete(req,res,next){
        Product.findByIdAndRemove({_id: req.params.id}).then(function(product){
            res.send(product)
            console.log("Product deleted");
        }).catch(next);  
    },

    getById(req,res,next){
        Product.findById({_id: req.params.id}).then(function(product){
            res.send(product)
            console.log(product);
        }).catch(next);

    },

}

module.exports = controller;
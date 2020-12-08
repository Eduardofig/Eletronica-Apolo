// Controller do produto
const Cart = require('../models/cart');

const controller = {

    get(req,res,next){
        res.send("Página do carrinho");
    },

    post(req,res,next){
        Cart.create(req.body).then(cart =>
            res.send(cart)).catch(next);
    },

    put(req,res,next){
        Cart.findByIdAndUpdate(req.params.id, req.body,{new: true}).
            then(function(){
        Cart.findOne({_id: req.params.id}).
            then(cart =>res.send(cart),
            console.log("Cart updated"));
            }).catch(next);
    },

    delete(req,res,next){
        Cart.findByIdAndRemove({_id: req.params.id}).then(function(cart){
            res.send(cart)
            console.log("Cart deleted");
        }).catch(next);  
    },

    getById(req,res,next){
        Cart.findById({_id: req.params.id}).then(function(cart){
            res.send(cart)
            console.log(cart);
        }).catch(next);

    },

}

module.exports = controller;
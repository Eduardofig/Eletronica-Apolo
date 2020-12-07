const User = require('../models/user');
const auth = require('../services/auth');

const controller = {
    
    get(req,res,next){
        res.send("Página de cadastro");
    },
        

   signUp: async(req,res,next) =>{

    const email = req.body.email;
    const senha = req.body.senha;

    const createdUser = await auth.signUp(email,senha);

    if(!createdUser){
        return res.status(400).json();
    }

    return res.json(createdUser);
        
   },

   signIn: async(req,res,next) =>{

    const email = req.body.email;
    const senha = req.body.senha;    

    const user = await auth.signIn(email,senha);

    if(!user){
        return res.status(401).json();
    }

    return res.json(user);

   },

   getById(req,res,next){
        User.create(req.body).then(user =>
            res.send(user)).catch(next);
    },

    put(req,res,next){

        User.findByIdAndUpdate(req.params.id, req.body,{new: true}).
            then(function(){
        User.findOne({_id: req.params.id}).
            then(user =>res.send(user),
        console.log("User updated"));
        }).catch(next);

    },

    delete(req,res,next){

    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user)
        console.log("User deleted");
    }).catch(next);

    },

}

module.exports = controller
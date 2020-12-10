const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Função auxiliar de geração de tokens
function formatResponse(user){
    
    const token = jwt.sign({userId: user.id},'ICMCRAINHA');

    return {
        user:{
            email: user.email,
            admin:user.admin,
        },
        token
    };
}

const auth = {

    // Função assíncrona de cadastro
    signUp: async(email,password) => {
        const user = await User.findOne({email: email});

    if(user){
        return null;
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password,salt);

    const createdUser = await User.create({
        email,
        senha:hash,
        admin:email.includes('@apolo.eletronica.com.br')
    });

    return formatResponse(createdUser);

    },

    // Função assíncrona de Login
    signIn: async(email,senha) => {
        const user = await User.findOne({email:email});

        if(!user){
            return null;
        }

        if(!bcrypt.compareSync(senha,user.senha)){
            return null;
        }
        return formatResponse(user);

    },
   
}

module.exports = auth

const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function formatResponse(user){
    
    const token = jwt.sign({userId: user.id},'ICMCRAINHA');

    return {
        user:{
            email: user.email
        },
        token
    };
}

const auth = {

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
        admin:false
    });

    return formatResponse(createdUser);

    },

    signIn: async(email,senha) => {


        const user = await User.findOne({email:email});

        if(!bcrypt.compareSync(senha,user.senha)){
            return null;
        }

        return formatResponse(user);

    },
   
}

module.exports = auth
const User = require('../models/user');
const bcrypt = require('bcrypt');

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

    return createdUser;

    },

    signIn: async(email,senha) => {


        const user = await User.findOne({email:email});

        if(!bcrypt.compareSync(senha,user.senha)){
            return null;
        }

        return user;

    },
   
}

module.exports = auth
const mongoose = require('../database')

// Model do usuário
const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
    },

    admin:{
        type: Boolean,
        required: true
    },

    senha: {
        type: String,
        required: true,
    },
    
    criadoEm:{
        type: Date,
        default:Date.now,
    }

})

const User = mongoose.model("User",UserSchema);
module.exports = User;
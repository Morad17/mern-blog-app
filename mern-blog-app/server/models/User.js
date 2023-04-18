const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('User', User)

module.exports = UserModel
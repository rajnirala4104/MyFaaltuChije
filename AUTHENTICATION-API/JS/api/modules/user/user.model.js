const { Schema, model } = require('mongoose')
const userSchema = Schema({
    name: {
        type: String,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        required: [true, "Please Fill all the Fields."],
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const User = model('User', userSchema)
module.exports = { User }


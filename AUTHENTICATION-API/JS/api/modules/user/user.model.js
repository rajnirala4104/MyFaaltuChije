const { Schema, model } = require('mongoose')
const { hash, genSalt, compare } = require('bcryptjs')
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

// checking the passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await compare(enteredPassword, this.password);
};

// hashing the password
userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            const salt = await genSalt(10);
            this.password = await hash(this.password, salt);
        }
        return next();
    } catch (error) {
        return next(error);
    }
});


const User = model('User', userSchema)
module.exports = { User }


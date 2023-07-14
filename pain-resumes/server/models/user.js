const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: [true, 'Username is required'],
        min: 2,
     },
    email: { 
        type: String,
        required: [true, 'Email is required'],
        min: 10,
     },
    password: { 
        type: String,
        required: [true, 'Password is required'], 
    },
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hashedPass => {
            this.password = hashedPass;

            next();
        });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
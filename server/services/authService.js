const User = require('../../server/models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = require('../config/config').secret;

const validateRegister = async (username, password, repeatPassword, email) => {

    if (username.length < 2) {
        throw new Error('Username is not long enough');
    }

    else if (password.length < 4) {
        throw new Error('Password is not long enough');
    }

    else if (repeatPassword.length < 4) {
        throw new Error('Repeat password is not long enough and is not the same as the password');
    }

    else if (repeatPassword != password) {
        throw new Error('Repeat password must be the same as the password');
    }

    else if (email.length < 4) {
        throw new Error('Email is not long enough');
    };

    const doUserExist = await User.findOne({
        $or: [
            { email },
            { username }
        ]
    });

    if (doUserExist) {
        throw new Error('User exists');
    }
};

const createToken = async (_id, username) => {
    const payload = { _id: _id, username: username };
    const options = { expiresIn: '1d' };
    const token = await jwt.sign(payload, secret, options);

    return token;
};

exports.registerUser = async (username, email, password, repeatPassword) => {
    await validateRegister(username, email, password, repeatPassword);

    const user = await User.create({ username: username, email: email, password: password });

    const token = await createToken(user._id, user.username);

   
    return {user, token}
};

exports.loginUser = async (email, password) => {
    const user = await User.findOne({ email: email }).exec();

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const isValid = bcrypt.compare(user.password, password);

    if (!isValid) {
        throw new Error('Incorrect email or password');
    }

    const token = await createToken(user._id, user.email);
    return {user, token}
};
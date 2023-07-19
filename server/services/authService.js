const User = require('../../server/models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const url = "http://localhost:3030/users";
const secret = require('../config/config').secret;

const validateRegister = async (username, password,  email) => {

    if (username.length < 2) {
        throw new Error('Username is not long enough');
    }

    else if (password.length < 4) {
        throw new Error('Password is not long enough');
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
    const token = jwt.sign(payload, secret, options);

    return token;
};

exports.registerUser = async (username, email, password, repeatPassword) => {
    await validateRegister(username, email, password, repeatPassword);

    const user = await User.create({ username: username, email: email, password: password });

    const token = createToken(user._id, user.username);

   
    return {user, token}
};

exports.loginUser = async (username, password) => {
    const user = await User.findOne({ username: username }).exec();

    if (!user) {
        throw new Error('Incorrect username or password');
    }

    const isValid = bcrypt.compare(user.password, password);

    if (!isValid) {
        throw new Error('Incorrect username or password');
    }

    const token = createToken(user._id, user.username);

    return token;
};
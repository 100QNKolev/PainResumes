const authService = require('../services/authService');
const { getError } = require('../utils/errorUtils');



exports.postRegisterPage = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const {user, token} = await authService.registerUser(username, password, email);

        res.cookie('auth', token);
        res.json(user);
        
    }
    catch (err) {
        console.log(err);
    }
};



exports.postLoginPage = async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await authService.loginUser(username, password);

        res.cookie('auth', token);

        
    }
    catch (err) {
        res.render('login', { error: await getError(err) });
    }
};

exports.getLogout = async (req, res) => {
    res.clearCookie('auth');
};


const authService = require('../services/authService');
const { getError } = require('../utils/errorUtils');




exports.postRegisterPage = async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        const token = await authService.registerUser(username, email, password, repeatPassword);

        res.cookie('auth', token);

     
    }
    catch (err) {
        res.render('register', { error: await getError(err) });
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


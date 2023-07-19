const authService = require('../services/authService');
const { getError } = require('../utils/errorUtils');


exports.postRegisterPage = async (req, res) => {
     console.log(req.body)

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


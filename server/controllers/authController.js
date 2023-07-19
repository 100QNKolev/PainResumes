const authService = require('../services/authService');

exports.postRegisterPage = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const { user, token } = await authService.registerUser(username, password, email);

        res.cookie('auth', token);
        res.json([user, token]);

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.postLoginPage = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { user, token } = await authService.loginUser(email, password);

        res.cookie('auth', token);
        res.json([user, token]);

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getLogout = async (req, res) => {
    res.clearCookie('auth');
};


const jwt = require('jsonwebtoken');
const secret = require('../config/config').secret;

exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const verifiedToken = jwt.verify(token, secret);

            res.locals.isAuthenticated = true;
            req.user = verifiedToken;
        }
        catch(err) {
            res.clearCookie('auth');
            req.status(401).redirect('404');
        }
    };

    next();
};

exports.isAuth = async (req,res,next) => {
  if(!res.locals.isAuthenticated)
  {
    res.redirect('/');
  }

  next();
};
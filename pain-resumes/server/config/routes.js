const homeController = require('../../src/server/controllers/homeController');
const authController = require('../../src/server/controllers/authController');
const photoController = require('../controllers/photoController.js');
const { isAuth } = require('./middlewares/authMiddleware');

module.exports = (app) => {
    app.get('/', homeController.getHomePage);

    app.get('/register', authController.getRegisterPage);
    app.post('/register', authController.postRegisterPage);

    app.get('/login', authController.getLoginPage);
    app.post('/login', authController.postLoginPage);

    app.get('/logout', authController.getLogout);

    app.get('/404', homeController.get404Page);

    app.get('/create', isAuth, photoController.getCreatePage);
    app.post('/create', isAuth, photoController.postCreatePage);

    app.get('/catalog', photoController.getCatalogPage);

    app.get('/details/:photoId', photoController.getDetailsPage);

    app.get('/edit/:photoId', isAuth, photoController.getEditPage);
    app.post('/edit/:photoId', isAuth, photoController.postEditPage);

    app.get('/delete/:photoId', isAuth, photoController.getDeletePhoto);

    app.post('/comment/create/:userId/:photoId', isAuth, photoController.getComment);
};
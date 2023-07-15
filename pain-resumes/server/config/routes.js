
const authController = require('../../src/server/controllers/authController');
const myinfoController = require('../controllers/photoController.js');
const { isAuth } = require('./middlewares/authMiddleware');

module.exports = (app) => {
    app.post('/register', authController.postRegisterPage);
    
    app.post('/login', authController.postLoginPage);

    app.get('/logout', authController.getLogout);

    app.get('/personalDetails', myinfoController.getPersonalDetails);
    app.post('/personalDetails', myinfoController.postPersonalDetails);
    app.put('/personalDetails', myinfoController.putPersonalDetails);
    app.delete('/personalDetails', myinfoController.deletePersonalDetails);

    app.get('/professionalExperience', myinfoController.getExperience);
    app.post('/professionalExperience', myinfoController.postExperience);
    app.put('/professionalExperience', myinfoController.putExperience);
    app.delete('/professionalExperience', myinfoController.deleteExperience);

    app.get('/education', myinfoController.getEducation);
    app.post('/education', myinfoController.postEducation);
    app.put('/education', myinfoController.putEducation);
    app.delete('/education', myinfoController.deleteEducation);

    app.get('/skills', myinfoController.getSkills);
    app.post('/skills', myinfoController.postSkills);
    app.put('/skills', myinfoController.putSkills);
    app.delete('/skills', myinfoController.deleteSkills);

};
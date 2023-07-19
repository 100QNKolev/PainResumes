
const authController = require('../controllers/authController');
const myinfoController = require('../controllers/myinfoController.js');

module.exports = (app) => {
    app.post('/users/register', authController.postRegisterPage);
    
    app.post('/users/login', authController.postLoginPage);

    app.get('/users/logout', authController.getLogout);

    app.get('/data/personalDetails', myinfoController.getPersonalDetails);
    app.post('/data/personalDetails', myinfoController.postPersonalDetails);
    app.put('/data/personalDetails', myinfoController.putPersonalDetails);
    app.delete('/data/personalDetails', myinfoController.deletePersonalDetails);

    app.get('/data/professionalExperience', myinfoController.getExperience);
    app.post('/data/professionalExperience', myinfoController.postExperience);
    app.put('/data/professionalExperience', myinfoController.putExperience);
    app.delete('/data/professionalExperience', myinfoController.deleteExperience);

    app.get('/data/education', myinfoController.getEducation);
    app.post('/data/education', myinfoController.postEducation);
    app.put('/data/education', myinfoController.putEducation);
    app.delete('/data/education', myinfoController.deleteEducation);

    app.get('/data/skills', myinfoController.getSkills);
    app.post('/data/skills', myinfoController.postSkills);
    app.put('/data/skills', myinfoController.putSkills);
    app.delete('/data/skills', myinfoController.deleteSkills);

};
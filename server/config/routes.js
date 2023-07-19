
const authController = require('../controllers/authController');
const myinfoController = require('../controllers/myinfoController.js');

module.exports = (app) => {
    app.post('/users/register', authController.postRegisterPage);
    
    app.post('/users/login', authController.postLoginPage);

    app.get('/users/logout', authController.getLogout);

    app.get('/data/personalDetails/:ownerID', myinfoController.getPersonalDetails);
    app.post('/data/personalDetails/:ownerID', myinfoController.postPersonalDetails);
    app.put('/data/personalDetails', myinfoController.putPersonalDetails);

    app.get('/data/professionalExperience/:ownerID', myinfoController.getExperience);
    app.post('/data/professionalExperience/:ownerID', myinfoController.postExperience);
    app.put('/data/professionalExperience', myinfoController.putExperience);
    app.delete('/data/professionalExperience/:infoId', myinfoController.deleteExperience);

    app.get('/data/education/:ownerID', myinfoController.getEducation);
    app.post('/data/education/:ownerID', myinfoController.postEducation);
    app.put('/data/education', myinfoController.putEducation);
    app.delete('/data/education/:infoId', myinfoController.deleteEducation);

    app.get('/data/skills/:ownerID', myinfoController.getSkills);
    app.post('/data/skills/:ownerID', myinfoController.postSkills);
    app.put('/data/skills', myinfoController.putSkills);
    app.delete('/data/skills/:infoId', myinfoController.deleteSkills);

};
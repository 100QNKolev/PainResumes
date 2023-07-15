const myinfoService = require('../services/myinfoService');

class MyInfoController {
    static create(data) {
    
      if (!myinfoService.isAuthenticated()) {
        console.log('User is not authenticated');
        return;
      }
      console.log('Creating myInfo:', data);
    }
  
    static read() {
      if (!myinfoService.isAuthenticated()) {
        console.log('User is not authenticated');
        return;
      }
  
      console.log('Reading myInfo');
    }
  
    static update(data) {
      if (!myinfoService.isAuthenticated()) {
        console.log('User is not authenticated');
        return;
      }
      console.log('Updating myInfo:', data);
    }
    static delete() {

      if (!myinfoService.isAuthenticated()) {
        console.log('User is not authenticated');
        return;
      }
      console.log('Deleting myInfo');
    }
  }

  exports.getPersonalDetails = async (req, res) => {
    try {
      const userDetails = await myinfoService.getPersonalDetails();
  
      res.json(userDetails);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };
  
  exports.postPersonalDetails = async (req, res) => {
    const { firstname, lastname, age, phone, email } = req.body;
  
    try {
      const userDetails = await myinfoService.createPersonalDetails(firstname, lastname, age, phone, email);
  
      res.json(userDetails);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };
  
  exports.putPersonalDetails = async (req, res) => {
    const { firstname, lastname, age, phone, email } = req.body;
  
    try {
      const userDetails = await myinfoService.updatePersonalDetails(firstname, lastname, age, phone, email);
  
      res.json(userDetails);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };
  
  exports.deletePersonalDetails = async (req, res) => {
    try {
      await myinfoService.deletePersonalDetails();
  
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };

  exports.getExperience = async (req, res) => {
    try {
      const experienceDetails = await myinfoService.getExperience();
  
      res.json(experienceDetails);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };
  
  exports.postExperience = async (req, res) => {
    const { positiontitle, companyname, startDate, endDate, worksummary } = req.body;
  
    try {
      const experienceDetails = await myinfoService.createExperience(positiontitle, companyname, startDate, endDate, worksummary);
  
      res.json(experienceDetails);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };
  
  exports.putExperience = async (req, res) => {
    const { positiontitle, companyname, startDate, endDate, worksummary } = req.body;
  
    try {
      const experienceDetails = await myinfoService.updateExperience(positiontitle, companyname, startDate, endDate, worksummary);
  
      res.json(experienceDetails);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };
  
  exports.deleteExperience = async (req, res) => {
    try {
      await myinfoService.deleteExperience();
  
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };

  exports.getEducation = async (req, res) => {
    try {
      const educationDetails = await myinfoService.getEducation();
  
      res.json(educationDetails);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };
  
  exports.postEducation = async (req, res) => {
    const { schoolname, schooladress, startDate, endDate, degree, fieldofstudy } = req.body;
  
    try {
      const educationDetails = await myinfoService.createEducation(schoolname, schooladress, startDate, endDate, degree, fieldofstudy);
  
      res.json(educationDetails);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };
  
  exports.putEducation = async (req, res) => {
    const { schoolname, schooladress, startDate, endDate, degree, fieldofstudy } = req.body;
  
    try {
      const educationDetails = await myinfoService.updateEducation(schoolname, schooladress, startDate, endDate, degree, fieldofstudy);
  
      res.json(educationDetails);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };
  
  exports.deleteEducation = async (req, res) => {
    try {
      await myinfoService.deleteEducation();
  
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };

  exports.getSkills = async (req, res) => {
    try {
      const skills = await myinfoService.getSkills();
  
      res.json(skills);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };
  
  exports.postSkills = async (req, res) => {
    const { skill } = req.body;
  
    try {
      const newSkill = await myinfoService.createSkill(skill);
  
      res.json(newSkill);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };
  
  exports.putSkills = async (req, res) => {
    const { skill } = req.body;
  
    try {
      const updatedSkill = await myinfoService.updateSkill(skill);
  
      res.json(updatedSkill);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };
  
  exports.deleteSkills = async (req, res) => {
    const { skill } = req.body;
  
    try {
      await myinfoService.deleteSkill(skill);
  
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ error: await getError(err) });
    }
  };

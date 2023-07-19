const myinfoService = require('../services/myinfoService');


exports.getPersonalDetails = async (req, res) => {
  
  try {
    const userDetails = await myinfoService.getPersonalDetails();

    res.json(userDetails);
  } catch (err) {
    console.log(err);
  }
};

exports.postPersonalDetails = async (req, res) => {
  const { firstName, lastName, age, phone, email, profile } = req.body;

  try {
    const userDetails = await myinfoService.addPersonalDetails(firstName, lastName, age, phone, email, profile);

    res.json(userDetails);
  } catch (err) {
    console.log(err);
  }
};

exports.putPersonalDetails = async (req, res) => {
  const { firstName, lastName, age, phone, email, profile } = req.body;

  try {
    const userDetails = await myinfoService.updatePersonalDetails(firstName, lastName, age, phone, email, profile);

    res.json(userDetails);
  } catch (err) {
    console.log(err);
  }
};

exports.deletePersonalDetails = async (req, res) => {
  try {
    await myinfoService.deletePersonalDetails();

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

exports.getExperience = async (req, res) => {
  try {
    const experienceDetails = await myinfoService.getExperience();

    res.json(experienceDetails);
  } catch (err) {
    console.log(err);
  }
};

exports.postExperience = async (req, res) => {
  const { positionTitle, companyName, startDate, endDate, workSummary } = req.body;
  
  try {
    const experienceDetails = await myinfoService.addExperience(positionTitle, companyName, startDate, endDate, workSummary);

    res.json(experienceDetails);
  } catch (err) {
    console.log(err);
  }
};

exports.putExperience = async (req, res) => {
  const { positionTitle, companyName, startDate, endDate, workSummary } = req.body;

  try {
   const experienceDetails = await myinfoService.updateExperience(positionTitle, companyName, startDate, endDate, workSummary);

    res.json(experienceDetails);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    await myinfoService.deleteExperience();

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

exports.getEducation = async (req, res) => {
  try {
    const educationDetails = await myinfoService.getEducation();

    res.json(educationDetails);
  } catch (err) {
    console.log(err);
  }
};

exports.postEducation = async (req, res) => {
  const { schoolName, schoolLocation, startDate, endDate, degree, fieldOfStudy, description } = req.body;

  try {
    const educationDetails = await myinfoService.addEducation(schoolName, schoolLocation, startDate, endDate, degree, fieldOfStudy, description);

    res.json(educationDetails);
  } catch (err) {
    console.log(err);
  }
};

exports.putEducation = async (req, res) => {
  const { schoolName, schoolAdress, startDate, endDate, degree, fieldOfStudy, description } = req.body;

  try {
    const educationDetails = await myinfoService.updateEducation(schoolName, schoolAdress, startDate, endDate, degree, fieldOfStudy, description);

    res.json(educationDetails);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteEducation = async (req, res) => {
  try {
    await myinfoService.deleteEducation();

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

exports.getSkills = async (req, res) => {
  try {
    const skills = await myinfoService.getSkills();

    res.json(skills);
  } catch (err) {
    console.log(err);
  }
};

exports.postSkills = async (req, res) => {
  const { skill } = req.body;

  try {
    const newSkill = await myinfoService.addSkills(skill);

    res.json(newSkill);
  } catch (err) {
    console.log(err);
  }
};

exports.putSkills = async (req, res) => {
  const { skill } = req.body;

  try {
    const updatedSkill = await myinfoService.updateSkills(skill);

    res.json(updatedSkill);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteSkills = async (req, res) => {
  const { skill } = req.body;

  try {
    await myinfoService.deleteSkills(skill);

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

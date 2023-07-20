const myinfoService = require('../services/myinfoService');


exports.getPersonalDetails = async (req, res) => {

  try {
    const userDetails = await myinfoService.getPersonalDetails(req, res);

    res.json(userDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postPersonalDetails = async (req, res) => {
  const { firstName, lastName, age, phone, email, profile } = req.body;
  const ownerID = req.params.ownerID;

  try {
    const userDetails = await myinfoService.addPersonalDetails(ownerID, firstName, lastName, age, phone, email, profile);

    res.json(userDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.putPersonalDetails = async (req, res) => {
  try {
    const userDetails = await myinfoService.updatePersonalDetails(req, res);

    res.json(userDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getExperience = async (req, res) => {
  try {
    const experienceDetails = await myinfoService.getExperience(req, res);

    res.json(experienceDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postExperience = async (req, res) => {
  const { positionTitle, companyName, startDate, endDate, workSummary } = req.body;
  const ownerID = req.params.ownerID;
  try {
    const experienceDetails = await myinfoService.addExperience(ownerID, positionTitle, companyName, startDate, endDate, workSummary);

    res.json(experienceDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.putExperience = async (req, res) => {

  try {
    const experienceDetails = await myinfoService.updateExperience(req, res);

    res.json(experienceDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    await myinfoService.deleteExperience(req, res);
    res.status(200).json({ status: 'deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEducation = async (req, res) => {
  try {
    const educationDetails = await myinfoService.getEducation(req, res);

    res.json(educationDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postEducation = async (req, res) => {
  const { schoolName, schoolLocation, startDate, endDate, degree, fieldOfStudy, description } = req.body;
  const ownerID = req.params.ownerID;

  try {
    const educationDetails = await myinfoService.addEducation(ownerID, schoolName, schoolLocation, startDate, endDate, degree, fieldOfStudy, description);

    res.json(educationDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.putEducation = async (req, res) => {

  try {
    const educationDetails = await myinfoService.updateEducation(req, res);

    res.json(educationDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEducation = async (req, res) => {
  try {
    await myinfoService.deleteEducation(req, res);
    res.status(200).json({ status: 'deleted' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSkills = async (req, res) => {
  try {
    const skills = await myinfoService.getSkills(req, res);

    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postSkills = async (req, res) => {
  const { skill } = req.body;
  const ownerID = req.params.ownerID;

  try {
    const newSkill = await myinfoService.addSkills(ownerID, skill);

    res.json(newSkill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.putSkills = async (req, res) => {

  try {
    const updatedSkill = await myinfoService.updateSkills(req, res);

    res.json(updatedSkill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSkills = async (req, res) => {

  try {
    await myinfoService.deleteSkills(req, res);
    res.status(200).json({ status: 'deleted' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

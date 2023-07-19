const User = require('../../server/models/user');
const Skills = require('../../server/models/skills');
const PersonalDetails = require('../../server/models/personaldetails');
const Experience = require('../../server/models/experience');
const Education = require('../../server/models/education');



exports.addEducation = async (ownerID, schoolName, schoolLocation, startDate, endDate, degree, fieldOfStudy, description) => {

    if (schoolName.length < 2) {
        throw new Error('Schoolname is not long enough');
    }

    else if (schoolLocation.length < 5) {
        throw new Error('Invalid school location');
    }

    else if (degree.length < 5 || degree.length > 50) {
        throw new Error('Degree should be from 5 to 50 symbols');
    }

    else if (fieldOfStudy.length < 5 || fieldOfStudy.length > 50) {
        throw new Error('Field of study should be from 5 to 50 symbols');
    };

    return await Education.create({ ownerID: ownerID, schoolName: schoolName, schoolLocation: schoolLocation, startDate: startDate, endDate: endDate, degree: degree, fieldOfStudy: fieldOfStudy, description: description });
};

exports.getEducation = async (req, res) => {
    try {

        const education = await Education.find({ ownerID: req.params.ownerID });

        return education;
    } catch (error) {
        console.log(error);
    }
};

exports.updateEducation = async (req, res) => {
    try {
        const { schoolName, schoolLocation, startDate, endDate, degree, fieldOfStudy, description } = req.body;

        if (schoolName.length < 2) {
            throw new Error('School name is not long enough');
        } else if (schoolLocation.length < 5) {
            throw new Error('Invalid school location');
        } else if (degree.length < 5 || degree.length > 50) {
            throw new Error('Degree should be from 5 to 50 symbols');
        } else if (fieldOfStudy.length < 5 || fieldOfStudy.length > 50) {
            throw new Error('Field of study should be from 5 to 50 symbols');
        }

        const education = await Education.findByIdAndUpdate(
            req.params.id,
            {
                schoolName,
                schoolLocation,
                startDate,
                endDate,
                degree,
                fieldOfStudy,
                description
            },
            { new: true }
        );

        if (!education) {
            throw new Error('Education not found');
        }

        res.json({ success: true, data: education });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteEducation = async (req, res) => {
    try {
        await Education.findByIdAndDelete(req.params.infoId);

    } catch (error) {
        console.log(error);
    }
};

exports.addExperience = async (ownerID, positionTitle, companyName, startDate, endDate, workSummary) => {

    if (positionTitle.length < 3) {
        throw new Error('Position title is not long enough');
    }

    else if (companyName.length < 3) {
        throw new Error('Invalid company name');
    }

    else if (workSummary.length < 5 || workSummary.length > 50) {
        throw new Error('Work summary should be from 5 to 50 symbols');
    }

    return await Experience.create({ ownerID: ownerID, positionTitle: positionTitle, companyName: companyName, startDate: startDate, endDate: endDate, workSummary: workSummary });
};

exports.getExperience = async (req, res) => {
    try {
        const experience = await Experience.find({ ownerID: req.params.ownerID });

        if (!experience) {
            throw new Error('Experience not found');
        }

        return experience;
    } catch (error) {
        console.log(error);
    }
};

exports.updateExperience = async (req, res) => {
    try {
        const { positionTitle, companyName, startDate, endDate, workSummary } = req.body;

        if (positionTitle.length < 3) {
            throw new Error('Position title is not long enough');
        } else if (companyName.length < 3) {
            throw new Error('Invalid company name');
        } else if (workSummary.length < 5 || workSummary.length > 50) {
            throw new Error('Work summary should be from 5 to 50 symbols');
        }

        const experience = await Experience.findByIdAndUpdate(
            req.params.id,
            {
                positionTitle,
                companyName,
                startDate,
                endDate,
                workSummary
            },
            { new: true }
        );

        if (!experience) {
            throw new Error('Experience not found');
        }

        res.json({ success: true, data: experience });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteExperience = async (req, res) => {
    try {
        await Experience.findByIdAndDelete(req.params.infoId);
    } catch (error) {
        console.log(error);
    }
};


exports.addPersonalDetails = async (ownerID, firstName, lastName, age, phone, email, profile) => {

    if (firstName.length < 2) {
        throw new Error('firstName is not long enough');
    }

    else if (lastName.length < 3) {
        throw new Error('Invalid last name');
    }

    else if (age < 1 || age > 100) {
        throw new Error('Invalid Age');
    }

    else if (phone.length < 5 || phone.length > 15) {
        throw new Error('Invalid phone number');
    }

    else if (email.length < 5 || email.length > 50) {
        throw new Error('Email should be from 5 to 50 symbols');
    };

    return await PersonalDetails.create({ ownerID: ownerID, firstName: firstName, lastName: lastName, age: age, phone: phone, email: email, profile: profile });
};

exports.getPersonalDetails = async (req, res) => {

    try {
        const personalDetails = await PersonalDetails.find({ ownerID: req.params.ownerID });

        if (!personalDetails) {
            throw new Error('Personal details not found');
        }

        return personalDetails;
    } catch (error) {
        console.log(error);
    }
};

exports.updatePersonalDetails = async (req, res) => {
    try {
        const { firstName, lastName, age, phone, email, profile } = req.body;

        if (firstName.length < 2) {
            throw new Error('First name is not long enough');
        } else if (lastName.length < 3) {
            throw new Error('Invalid last name');
        } else if (age < 1 || age > 100) {
            throw new Error('Invalid age');
        } else if (phone.length < 5 || phone.length > 15) {
            throw new Error('Invalid phone number');
        } else if (email.length < 5 || email.length > 50) {
            throw new Error('Email should be from 5 to 50 symbols');
        }

        const personalDetails = await PersonalDetails.findByIdAndUpdate(
            req.params.id,
            {
                firstName,
                lastName,
                age,
                phone,
                email,
                profile
            },
            { new: true }
        );

        if (!personalDetails) {
            throw new Error('Personal details not found');
        }

        res.json({ success: true, data: personalDetails });
    } catch (error) {
        console.log(error);
    }
};



exports.addSkills = async (ownerID, skill) => {

    if (skill.length < 2) {
        throw new Error('Skill description is not long enough');
    }

    return await Skills.create({ ownerID: ownerID, skill: skill });
};

exports.getSkills = async (req, res) => {
    try {
        const skills = await Skills.find({ ownerID: req.params.ownerID });

        return skills;
    } catch (error) {
        console.log(error);
    }
};

exports.updateSkills = async (req, res) => {
    try {
        const { skill } = req.body;

        if (skill.length < 2) {
            throw new Error('Skill description is not long enough');
        }

        const skills = await Skills.findByIdAndUpdate(
            req.params.id,
            { skill },
            { new: true }
        );

        if (!skills) {
            throw new Error('Skills not found');
        }

        res.json({ success: true, data: skills });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteSkills = async (req, res) => {

    try {
        await Skills.findByIdAndDelete(req.params.infoId);
    } catch (error) {
        console.log(error);
    }
};

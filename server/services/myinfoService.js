const User = require('../../server/models/user');
const Skills = require('../../server/models/skills');
const PersonalDetails = require('../../server/models/personaldetails');
const Experience = require('../../server/models/experience');
const Education = require('../../server/models/education');



exports.addEducation = async (schoolName, schoolLocation, startDate, endDate, degree, fieldOfStudy, description) => {

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

    return await Education.create({ schoolName: schoolName, schoolLocation: schoolLocation, startDate: startDate, endDate: endDate, degree: degree, fieldOfStudy: fieldOfStudy, description: description });
};

exports.getEducation = async (req, res) => {
    try {

        const education = await Education.findById(req.params.ownerID);

        if (!education) {
            throw new Error('Education not found');
        }

        res.json({ success: true, data: education });
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
        const education = await Education.findByIdAndDelete(req.params.infoId);

        if (!education) {
            throw new Error('Education not found');
        }

        res.json({ success: true, message: 'Education deleted' });
    } catch (error) {
        console.log(error);
    }
};

exports.addExperience = async (positionTitle, companyName, startDate, endDate, workSummary) => {

    if (positionTitle.length < 3) {
        throw new Error('Position title is not long enough');
    }

    else if (companyName.length < 3) {
        throw new Error('Invalid company name');
    }

    else if (workSummary.length < 5 || workSummary.length > 50) {
        throw new Error('Work summary should be from 5 to 50 symbols');
    }

    return await Experience.create({ positionTitle: positionTitle, companyName: companyName, startDate: startDate, endDate: endDate, workSummary: workSummary });
};

exports.getExperience = async (req, res) => {
    try {
        const experience = await Experience.findById(req.params.ownerID);

        if (!experience) {
            throw new Error('Experience not found');
        }

        res.json({ success: true, data: experience });
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
        const experience = await Experience.findByIdAndDelete(req.params.infoId);

        if (!experience) {
            throw new Error('Experience not found');
        }

        res.json({ success: true, message: 'Experience deleted' });
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
        console.log();
        if (!personalDetails) {
            throw new Error('Personal details not found');
        }

        res.json({ success: true, data: personalDetails });
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



exports.addSkills = async (skill) => {

    if (skill.length < 2) {
        throw new Error('Skill description is not long enough');
    }

    return await Skills.create({ skill });
};

exports.getSkills = async (req, res) => {
    try {
        const skills = await Skills.findById(req.params.ownerID);

        if (!skills) {
            throw new Error('Skills not found');
        }

        res.json({ success: true, data: skills });
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
    ;
    try {
        const skills = await Skills.findByIdAndDelete(req.params.infoId);

        if (!skills) {
            throw new Error('Skills not found');
        }

        res.json({ success: true, message: 'Skills deleted' });
    } catch (error) {
        console.log(error);
    }
};

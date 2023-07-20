const User = require('../../server/models/user');
const Skills = require('../../server/models/skills');
const PersonalDetails = require('../../server/models/personaldetails');
const Experience = require('../../server/models/experience');
const Education = require('../../server/models/education');



exports.addEducation = async (ownerID, schoolName, schoolLocation, startDate, endDate, degree, fieldOfStudy, description) => {

    if (schoolName.length < 2) {
        res.status(500).json({ error: 'Schoolname is not long enough'});
    }

    else if (schoolLocation.length < 5) {
        res.status(500).json({ error: 'Invalid school location'});
    }

    else if (degree.length < 5 || degree.length > 50) {
        res.status(500).json({ error: 'Degree should be from 5 to 50 symbols'});
    }

    else if (fieldOfStudy.length < 5 || fieldOfStudy.length > 50) {
        res.status(500).json({ error: 'Field of study should be from 5 to 50 symbols'});
    };

    return await Education.create({ ownerID: ownerID, schoolName: schoolName, schoolLocation: schoolLocation, startDate: startDate, endDate: endDate, degree: degree, fieldOfStudy: fieldOfStudy, description: description });
};

exports.getEducation = async (req, res) => {
    try {

        const education = await Education.find({ ownerID: req.params.ownerID });

        return education;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEducation = async (req, res) => {
    try {
        const { schoolName, schoolLocation, startDate, endDate, degree, fieldOfStudy, description } = req.body;

        if (schoolName.length < 2) {
            res.status(500).json({ error: 'School name is not long enough'});
        } else if (schoolLocation.length < 5) {
            res.status(500).json({ error: 'Invalid school location'});
        } else if (degree.length < 5 || degree.length > 50) {
            res.status(500).json({ error: 'Degree should be from 5 to 50 symbols'});
        } else if (fieldOfStudy.length < 5 || fieldOfStudy.length > 50) {
            res.status(500).json({ error: 'Field of study should be from 5 to 50 symbols'});
        }

        const education = await Education.findByIdAndUpdate(
            req.params.infoId,
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
            res.status(500).json({ error: 'Education not found'});
        }
        return education;

    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
};

exports.deleteEducation = async (req, res) => {
    try {
        await Education.findByIdAndDelete(req.params.infoId);

    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
};

exports.addExperience = async (ownerID, positionTitle, companyName, startDate, endDate, workSummary) => {

    if (positionTitle.length < 3) {
        res.status(500).json({ error: 'Position title is not long enough'});
    }

    else if (companyName.length < 3) {
        res.status(500).json({ error: 'Invalid company name'});
    }

    else if (workSummary.length < 5 || workSummary.length > 50) {
        res.status(500).json({ error: 'Work summary should be from 5 to 50 symbols'});
    }

    return await Experience.create({ ownerID: ownerID, positionTitle: positionTitle, companyName: companyName, startDate: startDate, endDate: endDate, workSummary: workSummary });
};

exports.getExperience = async (req, res) => {
    try {
        const experience = await Experience.find({ ownerID: req.params.ownerID });

        if (!experience) {
            res.status(500).json({ error: 'Experience not found'});
        }

        return experience;
    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
};

exports.updateExperience = async (req, res) => {
    try {
        const { positionTitle, companyName, startDate, endDate, workSummary } = req.body;
        const infoId = req.params.infoId;

        if (positionTitle.length < 3) {
            res.status(500).json({ error: 'Position title is not long enough'});
        } else if (companyName.length < 3) {
            res.status(500).json({ error: 'Invalid company name'});
        } else if (workSummary.length < 5 || workSummary.length > 50) {
            res.status(500).json({ error: 'Work summary should be from 5 to 50 symbols'});
        }

        const experience = await Experience.findByIdAndUpdate(
            req.params.infoId,
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
            res.status(500).json({ error: 'Experience not found'});
        }
        return experience;

    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
};

exports.deleteExperience = async (req, res) => {
    try {
        await Experience.findByIdAndDelete(req.params.infoId);
    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
};


exports.addPersonalDetails = async (ownerID, firstName, lastName, age, phone, email, profile) => {

    if (firstName.length < 2) {
        res.status(500).json({ error: 'firstName is not long enough'});
    }

    else if (lastName.length < 3) {
        res.status(500).json({ error: 'Invalid last name'});
    }

    else if (age < 1 || age > 100) {
        res.status(500).json({ error: 'Invalid Age'});
    }

    else if (phone.length < 5 || phone.length > 15) {
        res.status(500).json({ error: 'Invalid phone number'});
    }

    else if (email.length < 5 || email.length > 50) {
        res.status(500).json({ error: 'Email should be from 5 to 50 symbols'});
    };

    return await PersonalDetails.create({ ownerID: ownerID, firstName: firstName, lastName: lastName, age: age, phone: phone, email: email, profile: profile });
};

exports.getPersonalDetails = async (req, res) => {

    try {
        const personalDetails = await PersonalDetails.find({ ownerID: req.params.ownerID });

        if (!personalDetails) {
            res.status(500).json({ error:'Personal details not found'});
        }

        return personalDetails;
    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
};

exports.updatePersonalDetails = async (req, res) => {
    try {
        const { firstName, lastName, age, phone, email, profile } = req.body;

        if (firstName.length < 2) {
            res.status(500).json({ error: 'First name is not long enough'});
        } else if (lastName.length < 3) {
            res.status(500).json({ error: 'Invalid last name'});
        } else if (age < 1 || age > 100) {
            res.status(500).json({ error: 'Invalid age'});
        } else if (phone.length < 5 || phone.length > 15) {
            res.status(500).json({ error: 'Invalid phone number'});
        } else if (email.length < 5 || email.length > 50) {
            res.status(500).json({ error: 'Email should be from 5 to 50 symbols'});
        }

        const personalDetails = await PersonalDetails.findByIdAndUpdate(
            req.params.infoId,
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
            res.status(500).json({ error: 'Personal details not found'});
        }
        return personalDetails;

    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
};



exports.addSkills = async (ownerID, skill) => {

    if (skill.length < 2) {
        res.status(500).json({ error: 'Skill description is not long enough'});
    }

    return await Skills.create({ ownerID: ownerID, skill: skill });
};

exports.getSkills = async (req, res) => {
    try {
        const skills = await Skills.find({ ownerID: req.params.ownerID });

        return skills;
    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
};

exports.updateSkills = async (req, res) => {
    try {
        const { skill } = req.body;

        if (skill.length < 2) {
            res.status(500).json({ error: 'Skill description is not long enough'});
        }

        const skills = await Skills.findByIdAndUpdate(
            req.params.infoId,
            { skill },
            { new: true }
        );
        
        if (!skills) {
            res.status(500).json({ error: 'Skills not found'});
        }

        return skills;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteSkills = async (req, res) => {

    try {
        await Skills.findByIdAndDelete(req.params.infoId);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

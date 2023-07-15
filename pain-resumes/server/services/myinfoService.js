const User = require('../../server/models/user');
const Skills = require('../../server/models/skills');
const PersonalDetails = require('../../server/models/personaldetails');
const Experience = require('../../server/models/experience');
const Education = require('../../server/models/education');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.addEducation = async (schoolname, schooladress, startdate, enddate, degree, fieldofstudy) => {

    if (schoolname.length < 2) {
        throw new Error('Schoolname is not long enough');
    }

    else if (schooladress.length < 5) {
        throw new Error('Invalid school adress');
    }

    else if (age < 1 || age > 100) {
        throw new Error('Invalid Age');
    }

    else if (degree.length < 5 || degree.length > 50) {
        throw new Error('Degree should be from 5 to 50 symbols');
    }

    else if (fieldofstudy.length < 5 || fieldofstudy.length > 50) {
        throw new Error('Field of study should be from 5 to 50 symbols');
    };

    return await Education.create({schoolname: schoolname, schooladress: schooladress, startdate: startdate, enddate: enddate, degree: degree, fieldofstudy: fieldofstudy});
};

exports.addExperience = async (positiontitle, companyname, startdate, enddate, worksummary) => {

    if (positiontitle.length < 3) {
        throw new Error('Position title is not long enough');
    }

    else if (companyname.length < 3) {
        throw new Error('Invalid company name');
    }

    else if (worksummary.length < 5 || worksummary.length > 50) {
        throw new Error('Worksummary should be from 5 to 50 symbols');
    }

    return await Experience.create({positiontitle: positiontitle, companyname: companyname, startdate: startdate, enddate: enddate,  worksummary: worksummary});
};

exports.addPersonalDetails = async (firstname, lastname, age, phone, email) => {

    if (firstname.length < 2) {
        throw new Error('Schoolname is not long enough');
    }

    else if (lastname.length < 3) {
        throw new Error('Invalid last name');
    }

    else if (age < 1 || age > 100) {
        throw new Error('Invalid Age');
    }

    else if (phone.length < 5 || phone.length > 15) {
        throw new Error('Invalid phone number');
    }

    else if (email.length < 5 || email.length > 50) {
        throw new Error('Field of study should be from 5 to 50 symbols');
    };

    return await PersonalDetails.create({firstname: firstname, lastname: lastname, age: age, phone: phone, email: email});
};

exports.addSkills = async (skill) => {

    if (skill.length < 2) {
        throw new Error('Skill description is not long enough');
    }

    return await Skills.create({skill});
};
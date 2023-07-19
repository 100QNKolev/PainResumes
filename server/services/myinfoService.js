const User = require('../../server/models/user');
const Skills = require('../../server/models/skills');
const PersonalDetails = require('../../server/models/personaldetails');
const Experience = require('../../server/models/experience');
const Education = require('../../server/models/education');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


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

exports.addPersonalDetails = async (firstName, lastName, age, phone, email, profile) => {

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

    return await PersonalDetails.create({ firstName: firstName, lastName: lastName, age: age, phone: phone, email: email, profile: profile });
};

exports.addSkills = async (skill) => {

    if (skill.length < 2) {
        throw new Error('Skill description is not long enough');
    }

    return await Skills.create({ skill });
};
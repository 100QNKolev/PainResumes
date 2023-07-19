const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({

    schoolName: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    schoolLocation: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    degree: 
    {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    fieldOfStudy: 
    {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    description: 
    {
        type: String,
        required: true,
        min: 2,
    }
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
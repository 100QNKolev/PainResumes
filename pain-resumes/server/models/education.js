const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({

    schoolname: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    schooladress: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    startdate: {
        type: String,
        required: true,
    },
    enddate: {
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
    fieldofstudy: 
    {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
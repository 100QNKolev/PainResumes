const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  
    positiontitle: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    companyname: {
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
    worksummary: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
});

const Experience = mongoose.model('Professional Experience', experienceSchema);

module.exports = Experience;
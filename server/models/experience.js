const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    ownerID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    positionTitle: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    companyName: {
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
    workSummary: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
});

const Experience = mongoose.model('Professional Experience', experienceSchema);

module.exports = Experience;
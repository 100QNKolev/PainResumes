const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    ownerID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    age: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    profile: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
});

const PDetails = mongoose.model('Personal Details', detailsSchema);

module.exports = PDetails;
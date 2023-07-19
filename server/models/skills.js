const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    ownerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    skill: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },

})



const Skills = mongoose.model('Skills', skillsSchema);

module.exports = Skills;
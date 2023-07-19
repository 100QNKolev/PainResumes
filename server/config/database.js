const mongoose = require('mongoose');

const initDatabase = async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb+srv://PainResumes:painresumes1@painresumes.a7urosu.mongodb.net/');
    console.log('Database connected');
};

module.exports = initDatabase;
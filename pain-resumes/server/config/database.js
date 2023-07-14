const mongoose = require('mongoose');

const initDatabase = async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://localhost:3030/');

    console.log('Database connected');
};

module.exports = initDatabase;
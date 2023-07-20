const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  content: String
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
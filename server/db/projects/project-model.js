const mongoose = require('mongoose');
const schema = require('./project-schema.js')
const model = mongoose.model('ProjectModel', schema)
module.exports = model;
const mongoose = require('mongoose');
const schema = require('./prject-schema.js')
const model = mongoose.model('ProjectModel', schema)
module.exports = model;
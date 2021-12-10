const mongoose = require('mongoose')
const schema = mongoose.Schema({
    projectName: String,
    tickets: [String],
    date: { type: Date, default: Date.now}
}, {collection: 'users'});


module.exports = schema;
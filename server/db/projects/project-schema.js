const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name: String,
    description: String,
    tickets: [String],
    developers: [String],
    created_date: { type: Date, default: Date.now}
}, {collection: 'users'});


module.exports = schema;
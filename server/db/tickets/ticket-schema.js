const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name: String,
    description: String,
    project: String,
    submitter: String,
    status: {
        type: String,
        enum: ['New', 'In Progress', 'Resolved'],
        default: 'New'
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High']
    },
    type: {
        type: String,
        enum: ['Bugs', 'Feature Request', 'Customer Issue']
    },
    assigned_developer: String,
    //TODO: assignedTo: should we assign it to type User Schema?
    created_date: {type: Date, defaultValue: Date.now}
}, {collection: 'tickets'});

module.exports = schema;



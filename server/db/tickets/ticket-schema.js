const mongoose = require('mongoose')
const schema = mongoose.Schema({
    title: String,
    description: String,
    ticketStatus: {
        type: String,
        enum: ['Open', 'Closed'],
        default: 'Open'
    },
    ticketType: {
        type: String,
        enum: ['Bugs', 'Improvements']
    },
    assignedTo: String,
    //TODO: assignedTo: should we assign it to type User Schema?
    timeStamps: {
        dateCreated: {type: Date, defaultValue: Date.now},
        dateUpdated: {type: Date}
    }
}, {collection: 'tickets'});

module.exports = schema;



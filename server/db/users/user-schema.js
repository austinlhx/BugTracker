const mongoose = require('mongoose')
const schema = mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    role: {
        type: String,
        enum: ['Admin', 'Developer'],
        default: 'Developer'
    },
    date: { type: Date, default: Date.now},
    assignedTickets: [String]
}, {collection: 'users'});


module.exports = schema;
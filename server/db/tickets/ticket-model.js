const mongoose = require('mongoose');
const schema = require('./ticket-schema.js')
const model = mongoose.model('TicketModel', schema)
module.exports = model;
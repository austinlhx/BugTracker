const model = require('./ticket-model')

const createTicket = (ticket) => {
    model.create(ticket)
}

const findAllTickets = () => model.find({}, {});

const findTicket = (id) => model.find({_id: id});

const editTicket = (id, description) => 
    model.updateOne({_id: id},
        {
            $set: {
                description: description
            }
        });

const assignTicket = (user_id, id) => {
    return model.updateOne({_id: id},
        {
            $push: {
                assignedTo: user_id
            }
        });
    }

const deleteTicket = (id) => model.deleteOne({_id: id});

module.exports = {  
    createTicket, findAllTickets, findTicket, 
    editTicket, assignTicket, deleteTicket
}
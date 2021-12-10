const model = require('./ticket-model')

const createTicket = (ticket) => {
    model.create(ticket)
}

const findAllTickets = () => model.find({}, {});

const findTicket = (id) => model.find({_id: id});

const editTicket = (id) => 
    model.updateOne({_id: id},
        {
            $set: {
                description: "To be implemented..."
            }
        });

const assignTicket = (user_id, id) => {
    //TODO: Retrieve User from ID
    const user = "retrieveUser";
    return model.updateOne({_id: id},
        {
            $push: {
                assignedTo: user
            }
        });
    }

const deleteTicket = (id) => model.deleteOne({_id: id});

module.exports = {  
    createTicket, findAllTickets, findTicket, 
    editTicket, assignTicket, deleteTicket
}
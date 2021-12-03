const model = require('./ticket-model')

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
    model.updateOne({_id: id},
        {
            $set: {
                assignedTo: user
            }
        });
    }

const deleteTicket = (id) => model.deleteOne({_id: id});

module.exports = {
    findAllTickets, findTicket, 
    editTicket, assignTicket, deleteTicket
}
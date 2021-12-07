const model = require('./user-model')

const findAllUsers = () => model.find();

const findUser = (id) => model.find({_id: id})

const updateUser = (id, information) =>
    model.updateOne({_id: id},
        {
            $set: {
                firstName: "To be implemented"
            }
        }) //TODO: implement so that anything could be updated.

const assignTicketToUser = (ticket_id, id) => {
    const ticket = ticket_id

    model.updateOne({_id: id},
        {
            $push: {
                assignedTickets: ticket_id
            }
        })

} //Should it be ticket or ticket_id?

module.exports = {
    findAllUsers, findUser, 
    updateUser, assignTicketToUser
}
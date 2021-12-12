const model = require('./user-model')

const createUser = (user) => model.create(user);

const findAllUsers = () => model.find();

const findUser = (email) => model.find({email: email})

const updateUser = (user_id, information) =>
    model.updateOne({_id: user_id},
        {
            $set: {
                firstName: "To be implemented"
            }
        }) //TODO: implement so that anything could be updated.

const assignTicketToUser = (ticket_id, id) => {
    return model.updateOne({_id: id},
        {
            $push: {
                assignedTickets: ticket_id
            }
        })

} //Should it be ticket or ticket_id?

module.exports = {
    createUser, findAllUsers, findUser, 
    updateUser, assignTicketToUser
}
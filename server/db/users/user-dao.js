const model = require('./user-model')

const createUser = (user) => model.create(user);

const findAllUsers = () => model.find();

const findUser = (email) => model.find({email: email})

const deleteUser = (email) => model.deleteOne({email: email})

const updateUser = (user_id, userName) =>
    model.updateOne({_id: user_id},
        {
            $set: {
                userName: userName
            }
        }) 

const assignTicketToUser = (ticket_id, id) => {
    return model.updateOne({_id: id},
        {
            $push: {
                assignedTickets: ticket_id
            }
        })

} 

module.exports = {
    createUser, findAllUsers, findUser, 
    deleteUser, updateUser, assignTicketToUser
}
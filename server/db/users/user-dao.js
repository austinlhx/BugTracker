const model = require('./user-model')

const createUser = (user) => model.create(user);

const findAllUsers = () => model.find();

const findUser = (email) => model.find({ email: email })

const updateUser = (user_id, information) =>
    model.updateOne({ _id: user_id },
        {
            $set: {
                userName: userName
            }
        })

const assignTicketToUser = (ticket_id, id) => {
    return model.updateOne({ _id: id },
        {
            $push: {
                assignedTickets: ticket_id
            }
        })

}

const deleteUser = (email) => {
    console.log('hello');
    console.log(email)
    model.deleteOne({ email: email })
}

module.exports = {
    createUser, findAllUsers, findUser,
    updateUser, assignTicketToUser, deleteUser
}
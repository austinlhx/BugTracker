const model = require('./user-model')

const createUser = (user) => model.create(user);

const findAllUsers = () => model.find();

const findUser = (email) => model.find({ email: email })

<<<<<<< HEAD
const updateUser = (user_id, information) =>
    model.updateOne({ _id: user_id },
=======
const deleteUser = (email) => model.deleteOne({email: email})

const updateUser = (user_id, userName) =>
    model.updateOne({_id: user_id},
>>>>>>> 2a19bebd5492583f9776cb4b996862e2a8592890
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
<<<<<<< HEAD
    createUser, findAllUsers, findUser,
    updateUser, assignTicketToUser, deleteUser
=======
    createUser, findAllUsers, findUser, 
    deleteUser, updateUser, assignTicketToUser
>>>>>>> 2a19bebd5492583f9776cb4b996862e2a8592890
}
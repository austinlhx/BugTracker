const dao = require('../../db/users/user-dao.js')

//TODO: To be implemented...

module.exports = (app) => {
    const createUser = (req, res) => {
        console.log('create user')
        try {
            console.log(req.body)
            dao.createUser(req.body)
        }
        catch(e) {
            console.log('Error: ', e)
        }
        
    }

    const findAllUsers = (req, res) => {
        console.log('find all user')
        dao.findAllUsers()
            .then(users => {
                res.json(users);
            });
    }

    const findUser = (req, res) => {
        dao.findUser(req.params.id)
            .then(user => {
                res.json(user)
            });
    }

    const updateUser = (req, res) => {
        dao.updateUser(req.body)
    }

    const assignTicketToUser = (req, res) => {
        dao.assignTicketToUser(req.params.id, req.params.user_id)
    }

    app.post('/api/users', createUser)
    app.get('/api/users', findAllUsers)
    app.get('/api/users/:id', findUser)
    app.put('/api/users/:id', updateUser)
    app.put('/api/users/ticket/:id', assignTicketToUser)


}

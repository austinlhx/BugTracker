const dao = require('../../db/users/user-dao.js')

//TODO: To be implemented...

module.exports = (app, checkAuth) => {
    const createUser = (req, res) => {
        console.log('create user')
        try {
            dao.createUser(req.body)
            res.redirect('http://localhost:3000/dashboard')
        }
        catch (e) {
            console.log('Error: ', e)
        }

    }

    const findAllUsers = (req, res) => {
        dao.findAllUsers()
            .then(users => {
                res.json(users);
            });
    }

    const findUser = (req, res) => {
        dao.findUser(req.params.email)
            .then(user => {
                res.json(user)
            });
    }

    const updateUser = (req, res) => {
        dao.updateUser(req.params.id, req.body)
    }

    const assignTicketToUser = (req, res) => {
        dao.assignTicketToUser(req.params.id, req.params.user_id)
    }

    const deleteUser = (req, res) => {
        dao.deleteUser(req.params.email)
    }

    app.post('/api/users', createUser)
    app.get('/api/users', checkAuth, findAllUsers)
    app.delete('/api/users/:email', deleteUser)
    app.get('/api/users/:email', checkAuth, findUser)
    app.put('/api/users/:id', checkAuth, updateUser)
    app.put('/api/users/:user_id/ticket/:id', checkAuth, assignTicketToUser)


}

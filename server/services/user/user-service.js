const dao = require('../../db/users/user-dao.js')

//TODO: To be implemented...

module.exports = (app, checkAuth) => {
    const createUser = (req, res) => {
        console.log('create user')
        try {
            console.log(req.body)
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
        dao.findUser(req.params.id)
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

    app.post('/api/users', createUser)
    app.get('/api/users', checkAuth, findAllUsers)
    app.get('/api/users/:id', checkAuth, findUser)
    app.put('/api/users/:id', checkAuth, updateUser)
    app.put('/api/users/:user_id/ticket/:id', checkAuth, assignTicketToUser)


}

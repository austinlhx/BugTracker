const dao = require('../../db/tickets/ticket-dao.js')

//TODO: To be implemented...

module.exports = (app, checkAuth) => {
    const createTicket = (req, res) => {
        dao.createTicket(req.body)
    }

    const findAllTickets = (req, res) => {
        dao.findAllTickets()
            .then(tickets => {
                res.json(tickets);
            });
    }

    const findTicket = (req, res) => {
        dao.findTicket(req.params.id)
            .then(ticket => {
                res.json(ticket)
            });
    }

    const editTicket = (req, res) => {
        dao.editTicket(req.params.id)
            .then(ticket => {
                console.log(ticket)
            })
    }

    const assignTicket = (req, res) => {
        dao.assignTicket(req.params.id)
            .then(ticket => {
                res.json(ticket)
            })
    }

    const deleteTicket = (req, res) => {
        dao.deleteTicket(req.params.id)
    }

    app.post('/api/tickets', checkAuth, createTicket)
    app.get('/api/tickets', checkAuth, findAllTickets)
    app.get('/api/tickets/:id', checkAuth, findTicket)
    app.put('/api/tickets/edit/:id', checkAuth, editTicket)
    app.put('/api/tickets/assign/:id', checkAuth, assignTicket)
    app.delete('/api/tickets/:id', checkAuth, deleteTicket)
}

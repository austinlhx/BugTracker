const TICKET_API = 'http://localhost:4000/api/tickets'

export const createTicket = (newTicket) =>
    fetch(TICKET_API, {
        method: 'POST',
        body: JSON.stringify(newTicket),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllTickets = () => {
    fetch(TICKET_API)
        .then(response => response.json())
}

export const findticket = (ticket) =>
    fetch(`${TICKET_API} / ${ticket._id}`)
        .then(response => response.json());


export const editTicket = (ticket) =>
    fetch(`${TICKET_API} / ${ticket._id}`, {
        method: 'PUT',
        body: JSON.stringify(ticket),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())



export const assignTicket = (user, ticket) =>
    fetch(`${TICKET_API} / ${user._id} / assign / ${ticket._id}`, {
        method: 'POST',
        body: JSON.stringify(ticket),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findAllTickets,
    findticket,
    editTicket,
    assignTicket
};
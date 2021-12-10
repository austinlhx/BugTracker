const API = 'http://localhost:4000/api/tickets'

export const findAllTickets = () => {
    fetch(API)
        .then(response => response.json())
}
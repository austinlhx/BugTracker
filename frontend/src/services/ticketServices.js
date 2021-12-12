const USER_API = 'http://localhost:4000/api/tickets'

export const findAllTickets = () => {
    return fetch(USER_API)
        .then(response => response.json())
}

export default {
    findAllTickets
};


const USER_API = 'http://localhost:4000/api/users'

export const createUser = (newUser) =>
    fetch(USER_API, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllUsers = () => {
    fetch(USER_API)
        .then(response => response.json())
}

export const findUser = (user) =>
    fetch(`${USER_API} / ${user._id} / like`)
        .then(response => response.json());


export const updateUser = (user) =>
    fetch(`${USER_API} / ${user._id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())



export const assignTicketToUser = (user, ticket) =>
    fetch(`${USER_API} / ${user._id} / ticket / ${ticket._id}`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createUser,
    findAllUsers,
    findUser,
    updateUser,
    assignTicketToUser
}
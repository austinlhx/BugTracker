// import usersJson from './data/users.json';

const users = (state, action) => {
    switch (action.type) {
        case 'add-user':
            return action.newUser
        default:
            return null
    }
}

export default users;
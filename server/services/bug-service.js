const API = 'http://localhost:3000/login'

export const login = () => {
    fetch(API)
        .then(response => response.json())
}
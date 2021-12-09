const API = 'http://localhost:4000/login'

export const login = () => {
    fetch(API)
        .then(response => response.json())
}
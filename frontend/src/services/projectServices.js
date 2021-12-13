const PROJECT_API = 'http://localhost:4000/api/projects'

export const createProject = (newProject) =>
    fetch(PROJECT_API, {
        method: 'POST',
        body: JSON.stringify(newProject),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllProjects = () => {
    fetch(PROJECT_API)
        .then(response => response.json())
}

export const findproject = (project) =>
    fetch(`${PROJECT_API} / ${project._id}`)
        .then(response => response.json());


export const editProject = (project) =>
    fetch(`${PROJECT_API} / ${project._id}`, {
        method: 'PUT',
        body: JSON.stringify(project),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())



export const assignProject = (user, project) =>
    fetch(`${PROJECT_API} / ${user._id} / assign / ${project._id}`, {
        method: 'PUT',
        body: JSON.stringify(project),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteProject = (project) =>
    fetch(`${PROJECT_API} / ${project._id}`, {
        method: 'DELETE',
        body: JSON.stringify(project),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createProject,
    findAllProjects,
    findproject,
    editProject,
    assignProject,
    deleteProject
}
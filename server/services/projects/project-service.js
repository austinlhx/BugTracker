const dao = require('../../db/projects/project-dao.js')

//TODO: To be implemented...

module.exports = (app, checkAuth) => {
    const createProject = (req, res) => {
        dao.createProject(req.body)
    }

    const findAllProjects = (req, res) => {
        dao.findAllProjects()
            .then(projects => {
                res.json(projects);
            });
    }

    const findProject = (req, res) => {
        dao.findProject(req.params.id)
            .then(project => {
                res.json(project)
            });
    }

    const editProject = (req, res) => {
        dao.editProject(req.params.id)
            .then(Project => {
                console.log(Project)
            })
    }

    const assignProject = (req, res) => {
        dao.assignProject(req.params.id)
            .then(Project => {
                res.json(Project)
            })
    }

    const deleteProject = (req, res) => {
        dao.deleteProject(req.params.id)
    }

    app.post('/api/projects', checkAuth, createProject)
    app.get('/api/projects', findAllProjects)
    app.get('/api/projects/:id', checkAuth, findProject)
    app.put('/api/projects/edit/:id', checkAuth, editProject)
    app.put('/api/projects/:user_id/assign/:id', checkAuth, assignProject)
    app.delete('/api/projects/:id', checkAuth, deleteProject)
}

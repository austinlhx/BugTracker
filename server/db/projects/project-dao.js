const model = require('./project-model')

const createProject = (project) => {
    model.create(project)
}

const findAllProjects = () => model.find({}, {});

const findProject = (id) => model.find({_id: id});

const editProject = (id, description) => 
    model.updateOne({_id: id},
        {
            $set: {
                description: description
            }
        });

const assignProject = (user_id, id) => {
    model.updateOne({_id: id},
        {
            $push: {
                assignedTo: user_id
            }
        });
    }

const deleteProject = (id) => model.deleteOne({_id: id});

module.exports = {  
    createProject, findAllProjects, findProject, 
    editProject, assignProject, deleteProject
}
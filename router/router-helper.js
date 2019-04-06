const db = require('../data/dbConfig');

module.exports = {
    get,
    getById,
    insert,
    getProjectActions,
    insertAction
}

//Projects
function get() {
    return db('projects')
};

function getById(id) {
    return db('projects')
            .where({ id })
            .first()
            .then(project => {
                if (project) {
                    return getProjectActions(id).then(actions => {
                        project.actions = actions;
                        return project;
                    });
                } else {
                    return null;
                }
            })
};

function insert(project) {
    return db('projects')
    .insert(project)
    .then(([id]) => this.get(id));
};


//Actions
function getProjectActions(projectId) {
    return db('actions')
    .where('project_id', projectId)
    .then(actions => actions.map(action => {
        return {
            ...action
        };
    }));
}

function insertAction(action) {
    return db('actions')
        .insert(action)
        .then(([id]) => this.get(id));
}
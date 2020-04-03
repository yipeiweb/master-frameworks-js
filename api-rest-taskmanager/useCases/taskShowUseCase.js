'use strict'

module.exports = (request, response) => {

    // Recoger el id de la url
    let taskId = request.params.id;

    // Comprobar si existe
    if(!taskId || taskId == null){
        return response.status(404).send({
            status: 'error',
            message: 'Falta parametros !!!'
        });
    }

    let taskShowQuery = require('../queries/taskShowQuery');
    taskShowQuery(response, taskId);
}
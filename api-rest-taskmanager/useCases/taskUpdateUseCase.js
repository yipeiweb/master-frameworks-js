'use strict'

module.exports =  (request, response) => {
    // Recoger el id de la tarea por la url
    var taskId = request.params.id;

    // Recoger los datos que llegan por put
    var taskUpdateRequest = request.body;
    
    let validator = require('validator');
    let taskValidator = require('../validators/taskValidator');
    taskValidator(response, validator, taskUpdateRequest);

    let taskUpdateQuery = require('../queries/taskUpdateQuery');
    taskUpdateQuery(response, taskUpdateRequest, taskId);
}
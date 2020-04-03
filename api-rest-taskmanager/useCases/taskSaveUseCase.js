'use strict'

module.exports =  (request, response) => {
    // Recoger parametros por post
    let taskSaveRequest = request.body;

    //Validar los datos
    let validator = require('validator');
    let taskValidator = require('../validators/taskValidator');
    taskValidator(response, validator, taskSaveRequest);

    // Guardar la tarea
    let taskSaveQuery = require('../queries/taskSaveQuery');
    taskSaveQuery(response, taskSaveRequest);
}
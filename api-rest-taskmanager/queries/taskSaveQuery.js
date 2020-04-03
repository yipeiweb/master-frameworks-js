'use strict'

module.exports =  (response, taskSaveRequest) => {
    //Crear el objeto a guardar
    let Task = require('../models/task');
    let task = new Task();

    // Asignar valor
    task.title = taskSaveRequest.title;
    task.content = taskSaveRequest.content;
    task.status = taskSaveRequest.status;
    task.image = taskSaveRequest.image ? taskSaveRequest.image : null;
    
    // Guardar la tarea
    task.save((error, taskStored) => {
        if(error || !taskStored){
            return response.status(404).send({
                status: 'error',
                message: 'La tarea no se ha guardado !!!'
            });
        }

        return response.status(200).send({
            status: 'success',
            article: taskStored
        });
    });
}
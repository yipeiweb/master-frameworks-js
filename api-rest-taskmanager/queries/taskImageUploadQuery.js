'use strict'

module.exports = (response, taskId, fileName) => {
    // Buscar la tarea, asignarle el nombre de la imagen y actualizarlo
    let Task =  require('../models/task');

    Task.findById( taskId, "image", (error, task) => {
        if(error || !task){
            return response.status(404).send({
                status: 'error',
                message: 'Error, el id es incorrecto!!!'
            });
        }

        let taskImagePath = './upload/tasks/'+ task.get("image");

        let taskImageExistsService = require('../services/taskImageExistsService');
        if(taskImageExistsService(taskImagePath)) {
            let taskImageDeleteService = require('../services/taskImageDeleteService');
            taskImageDeleteService(response, taskImagePath )
        }

        return null;
    });

    Task.findOneAndUpdate(
        {_id: taskId}, 
        {image: fileName}, 
        {new:true}, 
        (err, taskUpdated) => {
            if(err || !taskUpdated){
                return response.status(200).send({
                    status: 'error',
                    message: 'Error al guardar la imagen de tarea en la base de datos !!!'
                });
            }

            return response.status(200).send({
                status: 'success',
                task: taskUpdated
            });
    });
}
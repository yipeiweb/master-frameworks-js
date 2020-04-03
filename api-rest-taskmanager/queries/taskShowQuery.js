'use strict'

module.exports = (response, taskId) => {
    // Buscar la tarea
    let Task =  require('../models/task');

    Task.findById(taskId, (error, task) => {    
        if(error || !task){
            return response.status(404).send({
                status: 'error',
                message: 'No existe la tarea !!!'
            });
        }

        return response.status(200).send({
            status: 'success',
            task
        });

    });
}
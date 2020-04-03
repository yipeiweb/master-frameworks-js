'use strict'

module.exports = (response, taskUpdateRequest, taskId) => {
    let Task =  require('../models/task');

    Task.findOneAndUpdate(
        {_id: taskId}, 
        taskUpdateRequest, 
        {new:true}, 
        (err, taskUpdated) => {
            if(err){
                return response.status(500).send({
                    status: 'error',
                    message: 'Error al actualizar !!!'
                });
            }

            if(!taskUpdated){
                return response.status(404).send({
                    status: 'error',
                    message: 'No existe la tarea !!!'
                });
            }

            return response.status(200).send({
                status: 'success',
                article: taskUpdated
            });
        }
    );
}
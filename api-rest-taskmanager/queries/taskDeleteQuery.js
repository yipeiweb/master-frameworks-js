'use strict'

module.exports = (request, response) => {
        // Recoger el id de la url
        var taskId = request.params.id;

        // Find and delete
        let Task =  require('../models/task');
        Task.findOneAndDelete({_id: taskId}, (err, taskRemoved) => {
            if(err){
                return response.status(500).send({
                    status: 'error',
                    message: 'Error al borrar !!!'
                });
            }
    
            if(!taskRemoved){
                return response.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado la tarea, posiblemente no exista !!!'
                });
            }
    
            return response.status(200).send({
                status: 'success',
                task: taskRemoved
            });
    
        }); 
}
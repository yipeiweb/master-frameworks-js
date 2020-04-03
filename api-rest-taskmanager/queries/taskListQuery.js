'use strict'

module.exports = (request, response) => {
    let Task = require('../models/task');
    
    let query = Task.find({});

    let last = request.params.last;
    if(last || last != undefined){
        query.limit(5);
    }

    query.sort('-_id').exec((error, tasks) => {

        if(error){
            return response.status(500).send({
                status: 'error',
                message: 'Error al devolver las tareas !!!'
            });
        }

        if(!tasks){
            return response.status(404).send({
                status: 'error',
                message: 'No hay tareas para mostrar !!!'
            });
        }

        return response.status(200).send({
            status: 'success',
            tasks
        });

    });
}
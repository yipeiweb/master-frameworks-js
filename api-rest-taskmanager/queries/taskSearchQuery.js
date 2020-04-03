'use strict'

module.exports = (response, searchString) => {
    let Task = require('../models/task');
    
    Task.find({ "$or": [
        { "title": { "$regex": searchString, "$options": "i"}},
        { "content": { "$regex": searchString, "$options": "i"}}
    ]})
    .sort([['date', 'descending']])
    .exec((error, tasks) => {
        if(error){
            return response.status(500).send({
                status: 'error',
                message: 'Error en la petición !!!'
            });
        }
        
        if(!tasks || tasks.length <= 0){
            return response.status(404).send({
                status: 'error',
                message: 'No hay tareas que coincidan con tu busqueda !!!'
            });
        }

        return response.status(200).send({
            status: 'success',
            tasks
        });
    });
}
'use strict'

module.exports = (request, response) => {
    if(!request.files){
        return response.status(404).send({
            status: 'error',
            message: 'Imagen no subida...'
        });
    }

    // Conseguir nombre y la extensión del archivo
    var filePath = request.files.file0.path;
    var fileSplit = filePath.split('\\');
    /* EN LINUX O MAC: var fileSplit = filePath.split('/'); */

    // Nombre del archivo
    var fileName = fileSplit[2];

    // Extensión del fichero
    var extensionSplit = fileName.split('\.');
    var fileExtension = extensionSplit[1];

    // Comprobar la extension, solo imagenes, si es valida borrar el fichero
    if(
       !fileExtension.toLowerCase('png') || !fileExtension.toLowerCase('jpg') ||
       !fileExtension.toLowerCase('jpeg') || !fileExtension.toLowerCase('gif') ||
       !fileExtension.toLowerCase('svg')
      ){  
        // borrar el archivo subido
        let taskImageExistsService = require('../services/taskImageExistsService');
        if(taskImageExistsService(filePath)) {
            let taskImageDeleteService = require('../services/taskImageDeleteService');
            
            if(taskImageDeleteService(response,filePath)) {
                return response.status(200).send({
                    status: 'error',
                    message: 'La extensión de la imagen no es válida !!!'
                });
            }
        }  
    }

    // Si todo es valido, sacando id de la url
    let taskId = request.params.id;
    if(!taskId){
        return response.status(200).send({
            status: 'success',
            image: fileName
        });
    }

    let taskImageUploadQuery = require('../queries/taskImageUploadQuery');
    taskImageUploadQuery(response, taskId, fileName);
}
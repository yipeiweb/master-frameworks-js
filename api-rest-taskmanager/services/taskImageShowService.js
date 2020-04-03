'use strict'

module.exports = (response, pathFile) => {
    let fileSystem = require('fs');
    let path = require('path');

    fileSystem.exists(pathFile, (exists) => {
        if(exists){
            return response.sendFile(path.resolve(pathFile));
        }else{
            return response.status(404).send({
                status: 'error',
                message: 'La imagen no existe !!!'
            });
        }
    });
}
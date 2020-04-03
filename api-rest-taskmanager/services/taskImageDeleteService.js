'use strict'

module.exports = (response, filePath) => {
    let fileSystem = require('fs');

    fileSystem.unlink(filePath, (error) => {
        if(error) {
            return response.status(500).send({
                status: 'error',
                message: 'Error al momento de eliminar imagen subido'
            });
        }

        return true;
    });
}
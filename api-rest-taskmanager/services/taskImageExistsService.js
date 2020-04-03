'use strict'

module.exports = (filePath) => {
    let fileSystem = require('fs');
    let taskImageExits = true;
    
    fileSystem.exists(filePath, (exists) => {
        exists ? taskImageExits = true : taskImageExits = false;
    });

    return taskImageExits;
}
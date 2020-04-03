'use strict'

module.exports = (request, response) => {
    let file = request.params.image;
    let pathFile = './upload/tasks/'+file;
    
    let taskImageShowService = require('../services/taskImageShowService'); 
    taskImageShowService(response, pathFile);
}
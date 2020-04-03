'use strict'

module.exports =  (request, response) => {
    let taskDeleteQuery = require('../queries/taskDeleteQuery');
    taskDeleteQuery(request, response);
}
'use strict'

module.exports = (request, response) => {
    // Find a task
    let taskListQuery =  require('../queries/taskListQuery');
    taskListQuery(request, response);
}
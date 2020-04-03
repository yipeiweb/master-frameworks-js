'use strict'

module.exports = (request, response) => {
    // Sacar el string a buscar
    var searchString = request.params.search;

    // Find or
    let taskSearchQuery = require('../queries/taskSearchQuery');
    taskSearchQuery(response, searchString);
}
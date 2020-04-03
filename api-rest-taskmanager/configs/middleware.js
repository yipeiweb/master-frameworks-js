'use strict'

module.exports = (app) => {
    let bodyParser = require('body-parser');

    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
} 
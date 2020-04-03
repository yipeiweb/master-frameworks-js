'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = Schema({
    title: String,
    content: String,
    status: String,
    date: { type: Date, default: Date.now },
    image: String
});

module.exports = mongoose.model('Task', TaskSchema);
// tasks --> guarda documentos de este tipo y con estructura dentro de la colección

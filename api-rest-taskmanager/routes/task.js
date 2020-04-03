'use strict'

//Dependencias
var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/tasks'});

//Controlador
var taskController = require('../controllers/taskController');

// Rutas
router.post('/save', taskController.save);
router.get('/tasks/:last?', taskController.list);
router.get('/task/:id', taskController.show);
router.put('/task/:id', taskController.update);
router.delete('/task/:id', taskController.delete);
router.post('/upload-image/:id?', md_upload, taskController.upload);
router.get('/get-image/:image', taskController.getImage);
router.get('/search/:search', taskController.search);

module.exports = router;
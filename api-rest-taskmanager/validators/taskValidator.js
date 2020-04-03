'use strict'

module.exports = ( response, validator, request) => {
    try{
        let validateTitle = !validator.isEmpty(request.title);
        let validateContent = !validator.isEmpty(request.content);
        let validateStatus = !validator.isEmpty(request.status);

        if(!validateTitle && !validateContent && !validateStatus){
            return response.status(200).send({
                status: 'error',
                message: 'Los datos no son válidos !!!'
            });
        }
    }catch(error){
        return response.status(200).send({
            status: 'error',
            message: 'Faltan datos por enviar !!!'
        });
    }
}
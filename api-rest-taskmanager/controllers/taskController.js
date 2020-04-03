'use strict'

module.exports = {
    save: require('../useCases/taskSaveUseCase'),

    list: require('../useCases/taskListUseCase'),

    show: require('../useCases/taskShowUseCase'),

    update: require('../useCases/taskUpdateUseCase'),

    delete: require('../useCases/taskDeleteUseCase'),

    upload: require('../useCases/taskImageUploadUseCase'),

    getImage: require('../useCases/taskImageShowUseCase'),

    search: require('../useCases/taskSearchUseCase')
};
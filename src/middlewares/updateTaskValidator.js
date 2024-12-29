const { body } = require("express-validator");

const updateTaskValidator = [
    body('title')
        .optional()
        .isString().withMessage('Title must be a string'),
    body('description')
        .optional()
        .isString().withMessage('Description must be a string'),
    body('completed')
        .optional()
        .isBoolean().withMessage('Completed must be a boolean')
]

module.exports = updateTaskValidator
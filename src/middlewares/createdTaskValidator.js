const { body } = require("express-validator");

const createdTaskValidator = [
    body('title')
        .notEmpty().withMessage('Title is required')
        .isString().withMessage('Title must be a string'),
    body('description')
        .optional()
        .isString().withMessage('Description must be a string'),
    body('completed')
        .default(false)
        .isBoolean().withMessage('Completed must be a boolean')
]

module.exports = createdTaskValidator
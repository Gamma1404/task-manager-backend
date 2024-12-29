const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Manager API',
            version: '1.0.0',
            description: 'API for managing tasks',
            contact: {
                name: 'Santiago Gama Moncada',
                email: 'santiagogamam@outlook.com'
            }
        }
    },
    apis: ['./src/routes/*.js']
};

const swaggerDoc = swaggerJSDoc(swaggerOptions);

module.exports = { swaggerDoc, swaggerUi }
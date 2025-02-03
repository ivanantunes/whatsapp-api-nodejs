const swagger = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Free Whatsapp API',
            version: '1.0.0',
            description: 'API documentation',
        },
        servers: [
            {

                url: 'http://localhost:3333',
                description: 'Local server'
            },
            {
                url: 'https://whatsapp-api-da7eccbe4a89.herokuapp.com',
                description: 'Production server'
            }
        ],
    },
    apis: ['./src/api/routes/*.js'], // Adjust the path to your route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
    app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs));
};
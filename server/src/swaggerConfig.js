import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import open from 'open'; 
import {PORT} from './server.js'

export function setupSwagger(app) {
    const swaggerOptions = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'API Documentation',
                version: '1.0.0',
                description: 'This is a simple CRUD API application made with Express and documented with Swagger',
            },
            servers: [
                {
                    url: `http://localhost:${PORT}`,
                    description: 'Development server'
                }
            ],
        },
        apis: ['./routes/categoryRouterjs', './routes/dishRouter.js'], // path to the API docs
    };
    
    const swaggerSpec = swaggerJsdoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export function openSwaggerPage() {
    open(`http://localhost:${PORT}/api-docs`);
}


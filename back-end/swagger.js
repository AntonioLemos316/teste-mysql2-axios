import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentação API',
      version: '1.0.0',
      description: "Testando API com mysql | axios | swagger | node.js",
      contact: {
        name: "Antonio Marques",
        url: "https://projeto-portfolio-2024.vercel.app/",
      },
    },
    servers: [
        {
            url: 'http://localhost:3000',
        }
    ],
  },
  apis: ['./routes/*.js'], 
};

const specsSwagger = swaggerJSDoc(options)

export default specsSwagger
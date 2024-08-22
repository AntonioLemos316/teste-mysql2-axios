import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import specsSwagger from './swagger.js'
import usuarioRouter from './routes/usuarioRouter.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specsSwagger))
app.use('/', usuarioRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
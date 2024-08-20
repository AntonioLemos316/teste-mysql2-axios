import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import pool from './db.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/teste', (req, res) => {
    res.send("Testando API!")
})

app.post('/usuarios', async (req, res) => {
    const {email, senha} = req.body
    
    if(!email || !senha) {
        return res.status(400).json({message: 'Email e senha são obrigatórios'})
    }

    try {
        const sql = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)'
        const [result] = await pool.execute(sql, [email, senha])

        res.status(201).json({
            id: result.insertId,
            message: 'Usuário criado com sucesso',
        })
    } catch (err) {
        console.error('Erro ao criar usuário', err)
        res.status(500).json({message: 'Erro ao criar usuário'})
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
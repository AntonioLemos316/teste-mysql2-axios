import express from 'express'
import pool from '../db.js'

const router = express.Router()

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               senha:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 message:
 *                   type: string
 *                   example: Usuário criado com sucesso
 *       400:
 *         description: Falha na validação dos dados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Email e senha são obrigatórios
 *       500:
 *         description: Erro ao criar usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erro ao criar usuário
 */
router.post('/usuario', async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    try {
        const sql = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)';
        const [result] = await pool.execute(sql, [email, senha]);

        res.status(201).json({
            id: result.insertId,
            message: 'Usuário criado com sucesso',
        });
    } catch (err) {
        console.error('Erro ao criar usuário', err);
        res.status(500).json({ message: 'Erro ao criar usuário' });
    }
});

export default router
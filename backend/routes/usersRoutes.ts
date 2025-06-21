import express from 'express';
// @ts-ignore
import Usuario from '../models/Usuario.js';

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const users = new Usuario(req.body);
        await users.save();
        res.status(201).json(users);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

router.get('/', async (req, res) => {
  try {
    const users = await Usuario.find();
    if (users.length === 0) {
      return res.status(404).json({ message: 'Nenhum usuario encontrado' });
    }
    res.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuarios:', error);
    res.status(500).json({ error: 'Erro ao buscar usuarios' });
  }
});

export default router;
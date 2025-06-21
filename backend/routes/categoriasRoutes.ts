import express from 'express';
// @ts-ignore
import Categoria from '../models/Categoria.js';

const router = express.Router();

// Cadastro de categoria
router.post('/add', async (req, res) => {
    try {
        const categoria = new Categoria(req.body);
        await categoria.save();
        res.status(201).json(categoria);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        res.status(400).json({ error: errorMsg });
    }
});

// Listagem de categorias (apenas ativas se query ativa=true)
router.get('/', async (req, res) => {
    try {
        const { ativa } = req.query;
        let query = {};
        if (ativa === 'true') query = { ativa: true };
        const categorias = await Categoria.find(query);
        res.json(categorias);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        res.status(500).json({ error: errorMsg });
    }
});

// Edição de categoria
router.put('/:id', async (req, res) => {
    try {
        const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(categoria);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        res.status(400).json({ error: errorMsg });
    }
});

// Inativação de categoria
router.patch('/:id/inativar', async (req, res) => {
    try {
        const categoria = await Categoria.findByIdAndUpdate(req.params.id, { ativa: false }, { new: true });
        res.json(categoria);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        res.status(400).json({ error: errorMsg });
    }
});

// Ativação de categoria
router.patch('/:id/ativar', async (req, res) => {
    try {
        const categoria = await Categoria.findByIdAndUpdate(req.params.id, { ativa: true }, { new: true });
        res.json(categoria);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        res.status(400).json({ error: errorMsg });
    }
});

export default router;

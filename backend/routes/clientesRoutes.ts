import express from 'express';
// @ts-ignore
import Cliente from '../models/Cliente.js';

const router = express.Router();

// Cadastro de cliente
router.post('/add', async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        res.status(201).json(cliente);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        res.status(400).json({ error: errorMsg });
    }
});

// Listagem de clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        res.status(500).json({ error: errorMsg });
    }
});

// Edição de cliente
router.put('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(cliente);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        res.status(400).json({ error: errorMsg });
    }
});

// Inativação de cliente
router.patch('/:id/inativar', async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, { ativo: false }, { new: true });
        res.json(cliente);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        res.status(400).json({ error: errorMsg });
    }
});

export default router;

import express from 'express';
// @ts-ignore
import Produto from '../models/Produto.js';

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const products = new Produto(req.body);
        await products.save();
        res.status(201).json(products);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        res.status(400).json({ error: errorMsg });
    }
});

router.get('/', async (req, res) => {
  try {
    const { categoria } = req.query;
    let query = {};
    if (categoria) {
      query = { categoria };
    }
    const products = await Produto.find(query).populate('categoria');
    res.json(products); // Sempre retorna array, mesmo vazio
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Atualizar produto para trocar categoria ou estoque mínimo
router.put('/:id', async (req, res) => {
    try {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(produto);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        res.status(400).json({ error: errorMsg });
    }
});

export default router;
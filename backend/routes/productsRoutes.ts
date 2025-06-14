import express from 'express';
import Produto from '../models/Produto';

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const products = new Produto(req.body);
        await products.save();
        res.status(201).json(products);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

router.get('/', async (req, res) => {
  try {
    const products = await Produto.find();  // Produto vai buscar na coleção 'products'
    if (products.length === 0) {
      return res.status(404).json({ message: 'Nenhum produto encontrado' });
    }
    res.json(products);  // Retorna os produtos encontrados
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

export default router;
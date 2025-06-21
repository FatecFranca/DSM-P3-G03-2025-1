import express from 'express';
// @ts-ignore
import Movimentacao from '../models/Movimentacao.js';
// @ts-ignore
import Produto from '../models/Produto.js';
// @ts-ignore
import Fornecedor from '../models/Fornecedor.js';

const router = express.Router();

// Listar todas as movimentações
router.get('/', async (req, res) => {
  try {
    const movimentacoes = await Movimentacao.find()
      .populate('produto', 'nome')
      .populate('fornecedor', 'nome')
      .populate('usuario', 'nome');
    res.json(movimentacoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar movimentações' });
  }
});

// Cadastrar movimentação (entrada ou saída)
router.post('/add', async (req, res) => {
  try {
    const { tipo, produto, fornecedor, quantidade, observacoes, usuario } = req.body;
    if (!['entrada', 'saida'].includes(tipo)) {
      return res.status(400).json({ error: 'Tipo de movimentação inválido' });
    }
    const prod = await Produto.findById(produto);
    if (!prod) return res.status(404).json({ error: 'Produto não encontrado' });
    if (tipo === 'saida' && prod.estoque < quantidade) {
      return res.status(400).json({ error: 'Estoque insuficiente para saída' });
    }
    // Atualiza estoque
    prod.estoque = tipo === 'entrada' ? prod.estoque + quantidade : prod.estoque - quantidade;
    await prod.save();
    // Cria movimentação
    const mov = new Movimentacao({ tipo, produto, fornecedor, quantidade, observacoes, usuario });
    await mov.save();
    res.status(201).json(mov);
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : String(err) });
  }
});

export default router;

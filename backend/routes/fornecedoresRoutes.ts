import express from 'express';
// @ts-ignore
import Fornecedor from '../models/Fornecedor.js';

const router = express.Router();

// Cadastro de fornecedor
router.post('/add', async (req, res) => {
  try {
    const fornecedor = new Fornecedor(req.body);
    await fornecedor.save();
    res.status(201).json(fornecedor);
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : String(err) });
  }
});

// Listagem de fornecedores
router.get('/', async (req, res) => {
  try {
    const fornecedores = await Fornecedor.find();
    res.json(fornecedores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar fornecedores' });
  }
});

// Edição de fornecedor
router.put('/:id', async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!fornecedor) return res.status(404).json({ message: 'Fornecedor não encontrado' });
    res.json(fornecedor);
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : String(err) });
  }
});

// Exclusão de fornecedor (RN008: não pode excluir se vinculado a entradas de estoque)
router.delete('/:id', async (req, res) => {
  // TODO: Verificar vínculo com entradas de estoque antes de excluir
  try {
    // Aqui deveria haver uma verificação real de vínculo
    const fornecedor = await Fornecedor.findByIdAndDelete(req.params.id);
    if (!fornecedor) return res.status(404).json({ message: 'Fornecedor não encontrado' });
    res.json({ message: 'Fornecedor excluído com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : String(err) });
  }
});

// Listagem de fornecedor por id (para edição)
router.get('/:id', async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findById(req.params.id);
    if (!fornecedor) return res.status(404).json({ message: 'Fornecedor não encontrado' });
    res.json(fornecedor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar fornecedor' });
  }
});

export default router;

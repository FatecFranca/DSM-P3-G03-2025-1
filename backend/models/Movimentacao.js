import mongoose from 'mongoose';

const movimentacaoSchema = new mongoose.Schema({
  tipo: { type: String, enum: ['entrada', 'saida'], required: true },
  produto: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
  fornecedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Fornecedor' },
  quantidade: { type: Number, required: true, min: 1 },
  data: { type: Date, default: Date.now },
  observacoes: { type: String },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

const Movimentacao = mongoose.model('Movimentacao', movimentacaoSchema, 'movimentacoes');

export default Movimentacao;

import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  ativa: { type: Boolean, default: true }
});

const Categoria = mongoose.model('Categoria', categoriaSchema, 'categorias');

export default Categoria;
